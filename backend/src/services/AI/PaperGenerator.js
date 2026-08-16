import { callGeminiWithRetry } from './geminiClient.js';
import { logger } from '../../utils/logger.js';
import { AppError } from '../../utils/AppError.js';

/**
 * Build a compact papers context string
 */
const buildPapersContext = (papersData) => {
  return papersData.map((p, i) => {
    const authors = Array.isArray(p.authors) ? p.authors.join(', ') : 'Unknown';
    return `[${i + 1}] "${p.title}" (${p.year || 'N/A'}) by ${authors}
   Journal: ${p.journal || 'N/A'}
   Abstract: ${(p.abstractSummary || '').substring(0, 400)}
   Methodology: ${(p.methodology || '').substring(0, 300)}
   Results: ${(p.results || '').substring(0, 300)}
   Limitations: ${(p.limitations || '').substring(0, 200)}
   Algorithms: ${(p.algorithms || '').substring(0, 200)}`;
  }).join('\n\n---\n\n');
};

/**
 * Generate a complete new research paper synthesizing multiple source papers
 * Uses a MULTI-STEP approach to avoid JSON truncation issues:
 *   Step 1: Generate core paper sections (title, abstract, intro, related work, methodology)
 *   Step 2: Generate supplementary sections (literature review, gap, objectives, system design)
 *   Step 3: Generate results, discussion, limitations, future work, conclusion, references
 */
export const generatePaper = async ({
  projectTitle,
  papersData,
  userObjectives,
  format = 'IEEE',
}) => {
  if (!papersData || papersData.length < 1) {
    throw new AppError('At least 1 summarized paper is required to generate a new paper.', 400);
  }

  logger.info(`Generating new research paper from ${papersData.length} source papers (multi-step mode)...`);

  const papersCtx = buildPapersContext(papersData);
  const objectives = userObjectives || 'Synthesize existing work and propose improvements addressing identified gaps';

  // ── STEP 1: Core sections ──────────────────────────────────────────────────
  logger.info('Paper synthesis Step 1/3: Core sections...');
  const step1Prompt = `You are an expert academic researcher writing a ${format}-format research paper.

PROJECT: "${projectTitle}"
FORMAT: ${format}
OBJECTIVES: ${objectives}

SOURCE PAPERS (${papersData.length} papers):
${papersCtx}

Instructions:
First, analyze the source papers to identify common findings across them and detect critical research gaps (such as limitations, dataset constraints, performance bottlenecks, or missing methodologies). Use these findings and gaps to formulate the new paper structure.

Generate ONLY these 4 sections as valid JSON (keep each section under 600 words):
{
  "title": "A specific, descriptive paper title addressing the research gap",
  "abstractText": "A 250-word abstract covering: motivation, problem statement, proposed approach, key contributions, and expected outcomes.",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "introduction": "A 500-word introduction covering: motivation, problem background, research contributions overview, and paper organization."
}

Return ONLY the JSON object. No markdown. No extra text.`;

  const step1 = await callGeminiWithRetry(step1Prompt, true, 4);

  // ── STEP 2: Related work & methodology ────────────────────────────────────
  logger.info('Paper synthesis Step 2/3: Related work & methodology...');
  const step2Prompt = `You are an expert academic researcher writing a ${format}-format research paper titled: "${step1.title}".

SOURCE PAPERS:
${papersCtx}

Generate ONLY these sections as valid JSON (each under 600 words):
{
  "relatedWork": "Comprehensive related work section citing all ${papersData.length} source papers [1]-[${papersData.length}] by number. Compare their approaches, datasets, and results.",
  "literatureReview": "A deep literature synthesis section identifying evolution of methods, common patterns, and gaps. Reference source papers by [1]-[${papersData.length}].",
  "researchGap": "Precise gap identification section with evidence from literature. Explain what is missing in the source papers and how our proposed work fills it.",
  "objectives": "Numbered list of 4-6 specific, measurable research objectives.\n1. ...\n2. ...",
  "methodology": "A 600-word methodology section detailing: proposed approach, system architecture, algorithms used, and mathematical formulations in plain text where needed."
}

Return ONLY the JSON object. No markdown. No extra text.`;

  const step2 = await callGeminiWithRetry(step2Prompt, true, 4);

  // ── STEP 3: Results, discussion & references ───────────────────────────────
  logger.info('Paper synthesis Step 3/3: Results, conclusion & references...');
  const step3Prompt = `You are an expert academic researcher completing a ${format} research paper titled: "${step1.title}".

SOURCE PAPERS:
${papersData.map((p, i) => `[${i + 1}] ${Array.isArray(p.authors) ? p.authors.join(', ') : 'Unknown'}, "${p.title}", ${p.journal || 'Journal/Conference'}, ${p.year || 'N/A'}`).join('\n')}

Generate ONLY these sections as valid JSON:
{
  "systemDesign": "400-word system design section describing components, architecture, data flow, and interactions.",
  "experimentalSetup": "300-word experimental setup: datasets used (based on source papers), evaluation metrics, baseline methods, and implementation details.",
  "results": "400-word results section with expected outcomes, comparison with baselines from source papers, and performance analysis.",
  "discussion": "300-word discussion: interpretation of results, comparison with state-of-the-art from source papers, and implications.",
  "limitations": "150-word honest limitations of the proposed approach.",
  "futureWork": "200-word future research directions building on this work.",
  "conclusion": "200-word conclusion summarizing contributions and impact.",
  "references": [
    {"id": 1, "authors": "...", "title": "...", "venue": "...", "year": 2024, "citation": "${format} formatted citation"}
  ]
}

IMPORTANT: The references array must contain exactly ${papersData.length} entries matching the source papers above.
Return ONLY the JSON object. No markdown. No extra text.`;

  const step3 = await callGeminiWithRetry(step3Prompt, true, 4);

  // Merge all sections
  const merged = {
    ...step1,
    ...step2,
    ...step3,
  };

  // Validate references
  if (!Array.isArray(merged.references) || merged.references.length === 0) {
    merged.references = papersData.map((p, i) => ({
      id: i + 1,
      authors: Array.isArray(p.authors) ? p.authors.join(', ') : 'Unknown',
      title: p.title,
      venue: p.journal || 'Conference/Journal',
      year: p.year || 'N/A',
      citation: `${Array.isArray(p.authors) ? p.authors.join(', ') : 'Unknown'}, "${p.title}," ${p.journal || 'Journal'}, ${p.year || 'N/A'}.`,
    }));
  }

  const formatField = (val) => {
    if (Array.isArray(val)) return val.map(item => `• ${item}`).join('\n');
    return val || null;
  };

  const fullContent = buildFullPaperMarkdown(merged, papersData, format);

  return {
    title: merged.title || `AI-Generated Synthesis: ${projectTitle}`,
    abstractText: merged.abstractText || null,
    keywords: Array.isArray(merged.keywords) ? merged.keywords : [],
    introduction: merged.introduction || null,
    relatedWork: merged.relatedWork || null,
    literatureReview: merged.literatureReview || null,
    researchGap: merged.researchGap || null,
    objectives: formatField(merged.objectives),
    methodology: merged.methodology || null,
    systemDesign: merged.systemDesign || null,
    experimentalSetup: merged.experimentalSetup || null,
    results: merged.results || null,
    discussion: merged.discussion || null,
    limitations: merged.limitations || null,
    futureWork: merged.futureWork || null,
    conclusion: merged.conclusion || null,
    references: Array.isArray(merged.references) ? merged.references : [],
    fullContent,
    format,
  };
};

const buildFullPaperMarkdown = (paper, sourcePapers, format) => {
  const refs = Array.isArray(paper.references)
    ? paper.references.map((r, i) => `[${i + 1}] ${r.citation || `${r.authors}, "${r.title}," ${r.venue}, ${r.year}.`}`).join('\n\n')
    : '';

  const sections = [
    `# ${paper.title || 'Untitled'}`,
    `\n**Format:** ${format} | **AI-Synthesized Research Paper**`,
    `\n**Keywords:** ${Array.isArray(paper.keywords) ? paper.keywords.join(', ') : ''}`,
    `\n---\n`,
    `## Abstract\n\n${paper.abstractText || ''}`,
    `\n## 1. Introduction\n\n${paper.introduction || ''}`,
    `\n## 2. Related Work\n\n${paper.relatedWork || ''}`,
    `\n## 3. Literature Review\n\n${paper.literatureReview || ''}`,
    `\n## 4. Research Gap\n\n${paper.researchGap || ''}`,
    `\n## 5. Research Objectives\n\n${paper.objectives || ''}`,
    `\n## 6. Proposed Methodology\n\n${paper.methodology || ''}`,
    `\n## 7. System Design\n\n${paper.systemDesign || ''}`,
    `\n## 8. Experimental Setup\n\n${paper.experimentalSetup || ''}`,
    `\n## 9. Results & Analysis\n\n${paper.results || ''}`,
    `\n## 10. Discussion\n\n${paper.discussion || ''}`,
    `\n## 11. Limitations\n\n${paper.limitations || ''}`,
    `\n## 12. Future Work\n\n${paper.futureWork || ''}`,
    `\n## 13. Conclusion\n\n${paper.conclusion || ''}`,
    `\n## References\n\n${refs}`,
  ];

  return sections.join('\n');
};
