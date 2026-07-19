const fs = require('fs');

let content = fs.readFileSync('frontend/src/pages/ProjectDetail.jsx', 'utf8');

// 1. Add handleDeleteComparison and handleDeleteGap
const addFunctions = `  const handleTriggerGap = async () => {
    setIsGapTriggering(true)
    try {
      toast.loading('Starting gap analysis...', { id: 'gap' })
      await gapAPI.triggerGapAnalysis(id)
      toast.success('Gap analysis started in background!', { id: 'gap' })
      fetchProjectData()
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      toast.error(msg, { id: 'gap' })
    } finally {
      setIsGapTriggering(false)
    }
  }

  const handleDeleteComparison = async (compId) => {
    if (!window.confirm('Delete this comparison synthesis?')) return
    try {
      toast.loading('Deleting comparison...', { id: 'del-comp' })
      await comparisonAPI.deleteComparison(compId)
      toast.success('Deleted comparison', { id: 'del-comp' })
      fetchProjectData()
    } catch (err) {
      toast.error(err.response?.data?.message || err.message, { id: 'del-comp' })
    }
  }

  const handleDeleteGap = async (gapId) => {
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

  const openGenModal = () => {`;

const origFunctions = `  const handleTriggerGap = async () => {
    setIsGapTriggering(true)
    try {
      toast.loading('Starting gap analysis...', { id: 'gap' })
      await gapAPI.triggerGapAnalysis(id)
      toast.success('Gap analysis started in background!', { id: 'gap' })
      fetchProjectData()
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      toast.error(msg, { id: 'gap' })
    } finally {
      setIsGapTriggering(false)
    }
  }

  const openGenModal = () => {`;

content = content.replace(origFunctions, addFunctions);

// 2. Replace Comparison UI
const origComparisonUI = `            {latestComparison?.status === 'COMPLETED' ? (
              <Link
                to={\`/dashboard/comparison/\${project.id}\`}
                className="w-full text-center block py-2.5 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-semibold rounded-xl text-sm transition-colors"
              >
                View Latest Comparison
              </Link>
            ) : latestComparison?.status === 'PROCESSING' ? (
              <Button disabled variant="outline" className="w-full">
                <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mr-2 inline-block" />
                Comparing Papers...
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full"
                isLoading={isCompareTriggering}
                disabled={!stats?.readyForComparison}
                title={!stats?.readyForComparison ? 'Requires at least 2 summarized papers' : ''}
                onClick={handleTriggerComparison}
              >
                Trigger AI Comparison
              </Button>
            )}`;

const newComparisonUI = `            {latestComparison ? (
              <div className="flex gap-2 w-full">
                {latestComparison.status === 'COMPLETED' ? (
                  <Link
                    to={\`/dashboard/comparison/\${project.id}\`}
                    className="flex-1 text-center block py-2.5 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-semibold rounded-xl text-sm transition-colors"
                  >
                    View Latest Comparison
                  </Link>
                ) : latestComparison.status === 'PROCESSING' ? (
                  <Button disabled variant="outline" className="flex-1">
                    <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mr-2 inline-block" />
                    Comparing Papers...
                  </Button>
                ) : (
                  <Button disabled variant="outline" className="flex-1 text-red-500 border-red-200">Comparison Failed</Button>
                )}
                <Button variant="outline" className="px-3" title="Delete Synthesis" onClick={() => handleDeleteComparison(latestComparison.id)}>
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full"
                isLoading={isCompareTriggering}
                disabled={!stats?.readyForComparison}
                title={!stats?.readyForComparison ? 'Requires at least 2 summarized papers' : ''}
                onClick={handleTriggerComparison}
              >
                Trigger AI Comparison
              </Button>
            )}`;

content = content.replace(origComparisonUI, newComparisonUI);

// 3. Replace Gap UI
const origGapUI = `            {latestGap?.status === 'COMPLETED' ? (
              <Link
                to={\`/dashboard/gap-analysis/\${project.id}\`}
                className="w-full text-center block py-2.5 bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 font-semibold rounded-xl text-sm transition-colors"
              >
                View Research Gaps
              </Link>
            ) : latestGap?.status === 'PROCESSING' ? (
              <Button disabled variant="outline" className="w-full">
                <div className="w-4 h-4 border-2 border-secondary-500 border-t-transparent rounded-full animate-spin mr-2 inline-block" />
                Detecting Gaps...
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full"
                isLoading={isGapTriggering}
                disabled={!stats?.readyToGenerate}
                title={!stats?.readyToGenerate ? 'Requires at least 1 summarized paper' : ''}
                onClick={handleTriggerGap}
              >
                Detect Gaps & Gaps
              </Button>
            )}`;

const newGapUI = `            {latestGap ? (
              <div className="flex gap-2 w-full">
                {latestGap.status === 'COMPLETED' ? (
                  <Link
                    to={\`/dashboard/gap-analysis/\${project.id}\`}
                    className="flex-1 text-center block py-2.5 bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 font-semibold rounded-xl text-sm transition-colors"
                  >
                    View Research Gaps
                  </Link>
                ) : latestGap.status === 'PROCESSING' ? (
                  <Button disabled variant="outline" className="flex-1">
                    <div className="w-4 h-4 border-2 border-secondary-500 border-t-transparent rounded-full animate-spin mr-2 inline-block" />
                    Detecting Gaps...
                  </Button>
                ) : (
                  <Button disabled variant="outline" className="flex-1 text-red-500 border-red-200">Analysis Failed</Button>
                )}
                <Button variant="outline" className="px-3" title="Delete Synthesis" onClick={() => handleDeleteGap(latestGap.id)}>
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full"
                isLoading={isGapTriggering}
                disabled={!stats?.readyToGenerate}
                title={!stats?.readyToGenerate ? 'Requires at least 1 summarized paper' : ''}
                onClick={handleTriggerGap}
              >
                Detect Gaps & Future Directions
              </Button>
            )}`;

content = content.replace(origGapUI, newGapUI);

fs.writeFileSync('frontend/src/pages/ProjectDetail.jsx', content, 'utf8');
console.log('UI updated successfully!');
