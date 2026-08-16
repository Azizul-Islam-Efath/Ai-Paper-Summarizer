import { callGeminiWithRetry } from './geminiClient.js';
import { PromptTemplates } from './PromptTemplates.js';
import { logger } from '../../utils/logger.js';

/**
 * Extract structured metadata from raw paper text using Gemini AI
 */
export const extractMetadata = async (rawText, title = null) => {
  try {
    logger.info('Extracting paper metadata via Gemini...');
    const prompt = PromptTemplates.extractMetadata(rawText);
    const result = await callGeminiWithRetry(prompt, true);

    // Validate and sanitize output
    return {
      title: result.title || title || 'Untitled Paper',
      authors: Array.isArray(result.authors) ? result.authors : [],
      journal: result.journal || null,
      conference: result.conference || null,
      year: typeof result.year === 'number' ? result.year : null,
      doi: result.doi || null,
      keywords: Array.isArray(result.keywords) ? result.keywords : [],
      abstract: result.abstract || null,
      volume: result.volume || null,
      issue: result.issue || null,
      pages: result.pages || null,
      publisher: result.publisher || null,
    };
  } catch (err) {
    logger.error('Metadata extraction failed:', err);
    // Return minimal metadata on failure
    return {
      title: title || 'Untitled Paper',
      authors: [],
      keywords: [],
      abstract: null,
      year: null,
      journal: null,
      conference: null,
      doi: null,
      volume: null,
      issue: null,
      pages: null,
      publisher: null,
    };
  }
};
