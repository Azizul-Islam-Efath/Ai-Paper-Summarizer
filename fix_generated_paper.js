const fs = require('fs');

let content = fs.readFileSync('frontend/src/pages/GeneratedPaper.jsx', 'utf8');

// 1. Fix paper.content -> paper.fullContent bug
content = content.replace(
  '{paper.content ? (',
  '{paper.fullContent ? ('
);
content = content.replace(
  'source={paper.content}',
  'source={paper.fullContent}'
);

// 2. Fix 'READY' status check - the DB stores 'COMPLETED' not 'READY'
content = content.replace(/paper\.status !== 'READY'/g, "paper.status !== 'COMPLETED'");
content = content.replace(/paper\.status === 'READY'/g, "paper.status === 'COMPLETED'");
content = content.replace(
  `'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :`,
  `'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :`
);

// 3. Add handleDelete function after handleExportHtml  
const deleteFunc = `
  const handleDelete = async () => {
    if (!window.confirm('Delete this synthesis draft? This cannot be undone.')) return
    try {
      toast.loading('Deleting draft...', { id: 'del-draft' })
      await generatedPaperAPI.deleteGeneratedPaper(id)
      toast.success('Draft deleted.', { id: 'del-draft' })
      navigate(project ? \`/dashboard/projects/\${project.id}\` : '/dashboard/projects')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete draft', { id: 'del-draft' })
    }
  }

`;

content = content.replace(
  '  if (isLoading) {',
  deleteFunc + '  if (isLoading) {'
);

// 4. Add Delete button next to Export buttons
content = content.replace(
  `        <Button onClick={handleExportPdf} isLoading={isExportingPdf} disabled={paper.status !== 'COMPLETED'}>
            Export PDF
          </Button>`,
  `        <Button onClick={handleExportPdf} isLoading={isExportingPdf} disabled={paper.status !== 'COMPLETED'}>
            Export PDF
          </Button>
          <Button
            variant="outline"
            className="text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={handleDelete}
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            Delete Draft
          </Button>`
);

// 5. Fix PROCESSING polling - add auto-refresh
const oldFetchData = `  const fetchData = async () => {
    try {
      const paperRes = await generatedPaperAPI.getGeneratedPaper(id)
      const p = paperRes.data.data
      setPaper(p)
      
      if (p.projectId) {
        const projRes = await projectAPI.getProject(p.projectId)
        setProject(projRes.data.data)
      }
    } catch (error) {
      toast.error('Failed to load generated paper')
      navigate('/dashboard/projects')
    } finally {
      setIsLoading(false)
    }
  }`;

const newFetchData = `  const fetchData = async () => {
    try {
      const paperRes = await generatedPaperAPI.getGeneratedPaper(id)
      const p = paperRes.data.data
      setPaper(p)
      
      if (p.projectId) {
        const projRes = await projectAPI.getProject(p.projectId)
        setProject(projRes.data.data)
      }

      // Auto-refresh while processing
      if (p.status === 'PROCESSING') {
        setTimeout(fetchData, 5000)
      }
    } catch (error) {
      toast.error('Failed to load generated paper')
      navigate('/dashboard/projects')
    } finally {
      setIsLoading(false)
    }
  }`;

content = content.replace(oldFetchData, newFetchData);

// 6. Fix FAILED status display
content = content.replace(
  `} : paper.status === 'ERROR' ? (`,
  `} : paper.status === 'FAILED' ? (`
);
content = content.replace(
  `} : paper.status === 'PROCESSING' ? (`,
  `} : paper.status === 'FAILED' ? (
          <div className="p-12 text-center">
            <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">Synthesis Failed</h3>
            <p className="text-gray-500 mb-4">The AI could not generate this paper. Please delete it and try again.</p>
            <Button variant="outline" className="text-red-600 border-red-200" onClick={handleDelete}>Delete & Start Over</Button>
          </div>
        ) : paper.status === 'PROCESSING' ? (`
);

// Remove the duplicate ERROR block if it was left
content = content.replace(
  `} : paper.status === 'ERROR' ? (
          <div className="p-12 text-center text-red-500">
            Failed to generate paper. Please try again.
          </div>
        ) : (`,
  ') : ('
);

fs.writeFileSync('frontend/src/pages/GeneratedPaper.jsx', content, 'utf8');
console.log('GeneratedPaper.jsx updated successfully');
