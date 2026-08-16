/**
 * Centralized AI Prompt Templates for Research Paper Workspace
 * All prompts engineered for academic quality output using Google Gemini
 */

export const PromptTemplates = {
  // ============================================================
  // METADATA EXTRACTION
  // ============================================================
  extractMetadata: (rawText) => `
You are an expert academic metadata extractor. Extract structured metadata from the following research paper text.

Return ONLY valid JSON in this exact structure (no markdown, no explanation):
{
  "title": "Full paper title",
  "authors": ["Author1 Name", "Author2 Name"],
  "journal": "Journal or conference name or null",
  "conference": "Conference name if applicable or null",
  "year": 2024,
  "doi": "DOI if found or null",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "abstract": "Full abstract text",
  "volume": "Volume number or null",
  "issue": "Issue number or null",
  "pages": "Page range or null",
  "publisher": "Publisher name or null"
}

Paper text (first 3000 characters):
${rawText.substring(0, 3000)}
`,

  // ============================================================
  // PAPER SUMMARIZATION
  // ============================================================
  summarizePaper: (title, rawText, metadata) => `
You are an elite AI research analyst with deep expertise in academic paper analysis. Produce a comprehensive, synthesis-ready summary of the following research paper with maximum accuracy and depth.

IMPORTANT GOAL: This summary will be used by an AI to generate a NEW, improved research paper that surpasses the original. Every field must be precise, factual, and directly extracted from the paper text.

Paper Title: ${title}
Authors: ${Array.isArray(metadata?.authors) ? metadata.authors.join(', ') : 'Unknown'}
Year: ${metadata?.year || 'Unknown'}
Journal: ${metadata?.journal || 'Unknown'}

Return ONLY valid JSON (no markdown, no code blocks, pure JSON):
{
  "abstractSummary": "A detailed 3-paragraph summary: (1) What problem is solved and why it matters, (2) What approach/method was used, (3) What were the key outcomes and significance",
  "researchProblem": "Precise description of the specific research challenge addressed, including why existing solutions were insufficient",
  "objectives": "All stated research objectives verbatim or closely paraphrased, numbered list format",
  "methodology": "Step-by-step methodology: data collection, preprocessing, model architecture, training procedure, evaluation protocol. Be specific about hyperparameters, layers, loss functions if mentioned",
  "dataset": "Full dataset details: name(s), size (samples/instances), source (public/private), split ratios (train/val/test), modalities, any augmentation applied. Say 'Not applicable' only if truly absent",
  "algorithms": "All algorithms, models, architectures used: CNN/RNN/Transformer type, key hyperparameters, activation functions, optimization algorithms (SGD, Adam etc.), any ensemble methods",
  "experiments": "Complete list of experiments: baselines compared, ablation studies, cross-dataset validation, statistical significance tests if mentioned",
  "results": "All quantitative results: accuracy, F1, precision, recall, AUC, BLEU, RMSE etc. with their exact values. Include comparison table data if present",
  "advantages": "Specific technical and practical advantages of this approach over prior work with evidence from results",
  "limitations": "All limitations explicitly or implicitly acknowledged: scalability, generalization, dataset bias, computational cost, scope restrictions",
  "futureWork": "All future research directions suggested by the authors, plus any obvious gaps not mentioned",
  "novelContributions": "Numbered list of novel contributions claimed by the authors",
  "importantEquations": "Key mathematical formulations as plain text (e.g., 'Loss = CrossEntropy(y_pred, y_true) + lambda*L2_norm'). State 'None' if not applicable",
  "keyContributions": "Top 5 most impactful contributions of this paper ranked by significance",
  "novelty": "What specifically makes this paper novel: first to do X, improved Y by Z%, proposed new Z architecture, etc.",
  "applications": "All real-world domains and use cases this work applies to",
  "disadvantages": "Technical and practical disadvantages: high compute cost, small dataset, limited generalizability, lack of ablation, etc.",
  "conclusion": "The authors' main conclusion and their view on the broader impact",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "citation": "IEEE formatted citation: Authors, 'Title,' Journal/Conference, vol. X, no. Y, pp. Z-Z, Year."
}

Full paper text:
${rawText.substring(0, 20000)}
`,

  // ============================================================
  // CROSS-PAPER COMPARISON
  // ============================================================
  comparePapers: (papersData) => `
You are an expert AI research analyst performing a comprehensive comparative analysis of multiple research papers.

Papers to compare:
${papersData.map((p, i) => `
Paper ${i + 1}: "${p.title}" (${p.year || 'N/A'})
Authors: ${Array.isArray(p.authors) ? p.authors.join(', ') : 'Unknown'}
Summary: ${p.abstractSummary || ''}
Methodology: ${p.methodology || ''}
Dataset: ${p.dataset || ''}
Algorithms: ${p.algorithms || ''}
Results: ${p.results || ''}
Limitations: ${p.limitations || ''}
`).join('\n---\n')}

Return ONLY valid JSON in this exact structure:
{
  "similarityMatrix": {
    "description": "Explanation of how papers relate to each other",
    "scores": [{"paper1": 0, "paper2": 1, "score": 0.85, "reason": "Both use CNN"}]
  },
  "researchTimeline": [
    {"year": 2020, "paperId": 0, "title": "...", "milestone": "First to propose..."}
  ],
  "methodComparison": {
    "approaches": ["Method A", "Method B"],
    "analysis": "Detailed comparison of methodologies"
  },
  "algorithmComparison": {
    "algorithms": [{"paper": 0, "algorithm": "...", "complexity": "...", "performance": "..."}],
    "analysis": "How algorithms compare"
  },
  "datasetComparison": {
    "datasets": [{"paper": 0, "name": "...", "size": "...", "type": "..."}],
    "analysis": "Dataset diversity and coverage"
  },
  "strengths": ["Strength 1 across papers", "Strength 2"],
  "weaknesses": ["Weakness 1", "Weakness 2"],
  "contradictions": ["Paper 1 claims X but Paper 2 found Y", "..."],
  "commonFindings": ["All papers agree that...", "..."],
  "missingTopics": ["Area not covered by any paper", "..."],
  "researchTrends": ["Trend 1 across timeline", "..."]
}
`,

  // ============================================================
  // RESEARCH GAP DETECTION
  // ============================================================
  detectGaps: (comparisonData, papersData) => `
You are an expert AI research strategist specializing in identifying research gaps and future opportunities.

Based on the following ${papersData.length} research papers and their comparative analysis, identify comprehensive research gaps and opportunities.

Papers analyzed:
${papersData.map((p, i) => `${i + 1}. "${p.title}" (${p.year}) - ${p.methodology} - Limitations: ${p.limitations}`).join('\n')}

Comparison insights:
- Common findings: ${JSON.stringify(comparisonData?.commonFindings || [])}
- Contradictions: ${JSON.stringify(comparisonData?.contradictions || [])}
- Missing topics: ${JSON.stringify(comparisonData?.missingTopics || [])}
- Weaknesses: ${JSON.stringify(comparisonData?.weaknesses || [])}

Return ONLY valid JSON:
{
  "unsolvedProblems": [
    {"problem": "Description", "severity": "HIGH/MEDIUM/LOW", "justification": "Why it matters", "relatedPapers": [0, 1]}
  ],
  "poorMethodologies": [
    {"issue": "Description", "affectedPapers": [0], "betterApproach": "Suggestion"}
  ],
  "datasetWeaknesses": [
    {"weakness": "Description", "currentDatasets": ["dataset1"], "needed": "What's missing"}
  ],
  "performanceIssues": [
    {"issue": "Description", "metric": "accuracy/speed/etc", "currentBest": "...", "target": "..."}
  ],
  "futureOpportunities": [
    {"opportunity": "Description", "feasibility": "HIGH/MEDIUM/LOW", "impact": "HIGH/MEDIUM/LOW", "approach": "How to tackle it"}
  ],
  "potentialContributions": [
    {"contribution": "Novel contribution idea", "novelty": "Why it's novel", "gap": "Which gap it fills", "approach": "Proposed method"}
  ]
}
`,

  // ============================================================
  // FULL PAPER GENERATION
  // ============================================================
  generatePaper: (projectTitle, papersData, gapData, comparisonData, userObjectives, format) => `
You are an expert academic researcher and scientific writer. Generate a complete, publication-ready research paper synthesizing insights from ${papersData.length} uploaded research papers.

Format: ${format || 'IEEE'}
Project Focus: ${projectTitle}
User Objectives: ${userObjectives || 'Synthesize existing work and propose improvements'}

Source Papers (DO NOT fabricate citations - only cite these papers):
${papersData.map((p, i) => `[${i + 1}] ${Array.isArray(p.authors) ? p.authors.join(', ') : 'Unknown'} - "${p.title}" (${p.year || 'N/A'}) - ${p.journal || 'Conference/Journal'}`).join('\n')}

Key Research Gaps Identified:
${JSON.stringify(gapData?.unsolvedProblems || [], null, 2)}

Novel Contribution Opportunities:
${JSON.stringify(gapData?.potentialContributions || [], null, 2)}

Common Findings Across Papers:
${JSON.stringify(comparisonData?.commonFindings || [], null, 2)}

Generate a COMPLETE academic research paper in valid JSON format:
{
  "title": "A Novel [descriptive title addressing the gap]",
  "abstractText": "Comprehensive 250-300 word abstract covering motivation, approach, key contributions, and results",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "introduction": "Full introduction section (500-800 words): motivation, problem statement, contributions overview, paper organization",
  "relatedWork": "Comprehensive related work review citing all uploaded papers [1]-[${papersData.length}] (400-600 words)",
  "literatureReview": "Deep literature synthesis comparing approaches, finding patterns, highlighting evolution (600-800 words)",
  "researchGap": "Precise identification of the research gap being addressed with evidence from literature (300-400 words)",
  "objectives": "Numbered list of specific, measurable research objectives",
  "methodology": "Detailed methodology section: proposed approach, system architecture, algorithms, mathematical formulations (600-800 words)",
  "systemDesign": "System design and architecture description with components and their interactions (400-500 words)",
  "experimentalSetup": "Experimental setup: datasets, evaluation metrics, baseline comparisons, implementation details (300-400 words)",
  "results": "Expected/projected results section with comparison tables and analysis (400-500 words)",
  "discussion": "Discussion of results, implications, comparison with state-of-the-art (300-400 words)",
  "limitations": "Honest limitations of the proposed approach (150-200 words)",
  "futureWork": "Future research directions (200-250 words)",
  "conclusion": "Comprehensive conclusion summarizing contributions and impact (200-250 words)",
  "references": [
    {"id": 1, "authors": "...", "title": "...", "venue": "...", "year": 2024, "citation": "IEEE formatted citation"}
  ],
  "fullContent": "Complete paper in markdown format with all sections formatted academically"
}

CRITICAL RULES:
1. Only cite the ${papersData.length} uploaded papers in references
2. Use academic writing style throughout
3. The methodology must be novel and address identified research gaps
4. All claims must be supported by cited evidence from uploaded papers
5. Mathematical formulations should use LaTeX notation where appropriate
`,

  // ============================================================
  // IMPROVE ACADEMIC WRITING
  // ============================================================
  improveWriting: (text, section) => `
You are an expert academic editor. Improve the following ${section} section for clarity, academic tone, and precision.
Maintain all technical content but enhance:
- Academic vocabulary
- Sentence structure
- Logical flow
- Technical precision

Return only the improved text, no explanations.

Original text:
${text}
`,

  // ============================================================
  // GENERATE REFERENCES
  // ============================================================
  generateReferences: (papers, format) => `
Generate properly formatted ${format || 'IEEE'} references for the following papers.
Return as JSON array: [{"id": 1, "citation": "formatted citation", "inText": "[1]"}]

Papers:
${papers.map((p, i) => `${i + 1}. Authors: ${Array.isArray(p.authors) ? p.authors.join(', ') : 'Unknown'}, Title: "${p.title}", Journal: ${p.journal || 'N/A'}, Year: ${p.year || 'N/A'}`).join('\n')}
`,
};
