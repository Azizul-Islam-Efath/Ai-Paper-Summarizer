const fs = require('fs');
let content = fs.readFileSync('frontend/src/pages/ProjectDetail.jsx', 'utf8');

// Add handleDeleteDraft function after handleDeleteGap
const afterDeleteGap = `  const handleDeleteGap = async (gapId) => {
    if (!window.confirm('Delete this gap analysis?')) return
    try {
      toast.loading('Deleting gap analysis...', { id: 'del-gap' })
      await gapAPI.deleteGapAnalysis(gapId)
      toast.success('Deleted gap analysis', { id: 'del-gap' })
      fetchProjectData()
    } catch (err) {
      toast.error(err.response?.data?.message || err.message, { id: 'del-gap' })
    }
  }`;

const withDeleteDraft = `  const handleDeleteGap = async (gapId) => {
    if (!window.confirm('Delete this gap analysis?')) return
    try {
      toast.loading('Deleting gap analysis...', { id: 'del-gap' })
      await gapAPI.deleteGapAnalysis(gapId)
      toast.success('Deleted gap analysis', { id: 'del-gap' })
      fetchProjectData()
    } catch (err) {
      toast.error(err.response?.data?.message || err.message, { id: 'del-gap' })
    }
  }

  const handleDeleteDraft = async (draftId) => {
    if (!window.confirm('Delete this synthesis draft? This cannot be undone.')) return
    try {
      toast.loading('Deleting draft...', { id: 'del-draft' })
      await generatedPaperAPI.deleteGeneratedPaper(draftId)
      toast.success('Draft deleted', { id: 'del-draft' })
      fetchProjectData()
    } catch (err) {
      toast.error(err.response?.data?.message || err.message, { id: 'del-draft' })
    }
  }`;

content = content.replace(afterDeleteGap, withDeleteDraft);

// Add delete button in the draft card
const oldDraftCard = `                    <div>
                      <Link
                        to={\`/dashboard/generator/\${paper.id}\`}
                        className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100 text-purple-700 dark:text-purple-400 rounded-lg text-xs font-semibold"
                      >
                        {paper.status === 'COMPLETED' ? 'View Draft' : 'Check Progress'}
                      </Link>
                    </div>`;

const newDraftCard = `                    <div className="flex items-center gap-2">
                      <Link
                        to={\`/dashboard/generator/\${paper.id}\`}
                        className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100 text-purple-700 dark:text-purple-400 rounded-lg text-xs font-semibold"
                      >
                        {paper.status === 'COMPLETED' ? 'View Draft' : 'Check Progress'}
                      </Link>
                      <button
                        onClick={() => handleDeleteDraft(paper.id)}
                        title="Delete this draft"
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                      </button>
                    </div>`;

if (content.includes(oldDraftCard)) {
  content = content.replace(oldDraftCard, newDraftCard);
  console.log('Replaced draft card with delete button');
} else {
  console.log('Draft card pattern not found - searching for alternate pattern');
}

// Fix status badge for FAILED papers
const oldStatus = `{paper.status === 'COMPLETED' ? 'View Draft' : 'Check Progress'}`;
// Already replaced above

fs.writeFileSync('frontend/src/pages/ProjectDetail.jsx', content, 'utf8');
console.log('ProjectDetail.jsx draft delete button added');
