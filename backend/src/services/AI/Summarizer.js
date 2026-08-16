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

  // Helper to format arrays or nested objects as bullet lists for DB
  const formatField = (val) => {
    if (!val) return null;
    if (Array.isArray(val)) {
      return val.map(item => `• ${item}`).join('\n');
    }
    if (typeof val === 'object' && val !== null) {
      return Object.entries(val)
        .map(([k, v]) => `• ${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`)
        .join('\n');
    }
    return String(val);
  };

  // Helper to guarantee value is a string or null (no objects/arrays)
  const ensureString = (val) => {
    if (!val) return null;
    if (Array.isArray(val)) {
      return val.join('\n');
    }
    if (typeof val === 'object' && val !== null) {
      return Object.entries(val)
        .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`)
        .join('\n');
    }
    return String(val);
  };

  // Validate required fields and sanitize format
  const sanitized = {
    abstractSummary: ensureString(result.abstractSummary),
    researchProblem: ensureString(result.researchProblem),
    objectives: formatField(result.objectives),
    methodology: ensureString(result.methodology),
    dataset: formatField(result.dataset), // Safe for list/object format
    algorithms: formatField(result.algorithms),
    experiments: ensureString(result.experiments),
    results: ensureString(result.results),
    advantages: formatField(result.advantages),
    limitations: formatField(result.limitations),
    futureWork: formatField(result.futureWork),
    novelContributions: formatField(result.novelContributions),
    importantEquations: formatField(result.importantEquations),
    keyContributions: formatField(result.keyContributions),
    novelty: ensureString(result.novelty),
    applications: formatField(result.applications),
    disadvantages: formatField(result.disadvantages),
    conclusion: ensureString(result.conclusion),
    keywords: Array.isArray(result.keywords) ? result.keywords.map(String) : [],
    citation: ensureString(result.citation),
  };

  logger.info(`Summary generated successfully for: "${title}"`);
  return sanitized;
};
