import { callGeminiWithRetry } from './geminiClient.js';
import { PromptTemplates } from './PromptTemplates.js';
import { logger } from '../../utils/logger.js';
import { AppError } from '../../utils/AppError.js';

/**
 * Generate a comprehensive structured summary of a research paper using Gemini AI
 */
export const summarizePaper = async (title, rawText, metadata = {}) => {
  logger.info(`Summarizing paper: "${title}"`);

  if (!rawText || rawText.length < 100) {
    throw new AppError('Paper content is too short to summarize.', 400);
  }

  const prompt = PromptTemplates.summarizePaper(title, rawText, metadata);
  const result = await callGeminiWithRetry(prompt, true);

  // Helper to format arrays or strings cleanly for DB
  const formatField = (val) => {
    if (Array.isArray(val)) {
      return val.map(item => `• ${item}`).join('\n');
    }
    return val || null;
  };

  // Validate required fields and sanitize format
  const sanitized = {
    abstractSummary: result.abstractSummary || null,
    researchProblem: result.researchProblem || null,
    objectives: formatField(result.objectives),
    methodology: result.methodology || null,
    dataset: result.dataset || null,
    algorithms: formatField(result.algorithms),
    experiments: result.experiments || null,
    results: result.results || null,
    advantages: formatField(result.advantages),
    limitations: formatField(result.limitations),
    futureWork: formatField(result.futureWork),
    novelContributions: formatField(result.novelContributions),
    importantEquations: formatField(result.importantEquations),
    keyContributions: formatField(result.keyContributions),
    novelty: result.novelty || null,
    applications: formatField(result.applications),
    disadvantages: formatField(result.disadvantages),
    conclusion: result.conclusion || null,
    keywords: Array.isArray(result.keywords) ? result.keywords : [],
    citation: result.citation || null,
  };

  logger.info(`Summary generated successfully for: "${title}"`);
  return sanitized;
};
