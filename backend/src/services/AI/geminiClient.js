import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '../../config/env.js';
import { logger } from '../../utils/logger.js';
import { AppError } from '../../utils/AppError.js';

// Shared Gemini client
let geminiClient = null;
let geminiModel = null;

const getGeminiModel = () => {
  if (!geminiModel) {
    geminiClient = new GoogleGenerativeAI(env.GEMINI_API_KEY);
    geminiModel = geminiClient.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.3,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 16384,
        responseMimeType: "application/json",
      },
    });
  }
  return geminiModel;
};

/**
 * Call Gemini AI with a prompt and parse JSON response
 */
export const callGemini = async (prompt, expectJson = true) => {
  try {
    const model = getGeminiModel();
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    if (!expectJson) return text;

    // Strip markdown code blocks if present
    const cleaned = text
      .replace(/```json\n?/gi, '')
      .replace(/```\n?/gi, '')
      .trim();

    return JSON.parse(cleaned);
  } catch (err) {
    // Log the raw error for diagnostics
    logger.error('Raw Gemini API error:', { message: err.message, status: err.status, code: err.code, stack: err.stack });
    console.error('[GEMINI RAW ERROR]', err.message);

    if (err instanceof SyntaxError) {
      logger.warn('Gemini returned non-JSON response, attempting recovery...');
      throw new AppError('AI returned invalid format. Please retry.', 503);
    }
    if (err.message?.includes('API_KEY_INVALID') || err.message?.includes('API key not valid') || err.message?.includes('API key')) {
      throw new AppError('AI service configuration error.', 503);
    }
    if (err.message?.includes('quota') || err.message?.includes('rate') || err.status === 429) {
      throw new AppError('AI service is busy. Please try again later.', 429);
    }
    if (err.message?.includes('404') || err.message?.includes('not found') || err.message?.includes('Not Found')) {
      throw new AppError('AI model not available. Please contact support.', 503);
    }
    logger.error('Gemini API error:', err);
    throw new AppError('AI service unavailable. Please try again.', 503);
  }
};

/**
 * Call Gemini with retry logic
 */
export const callGeminiWithRetry = async (prompt, expectJson = true, maxRetries = 3) => {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await callGemini(prompt, expectJson);
    } catch (err) {
      lastError = err;
      if (attempt < maxRetries) {
        const delay = attempt * 2000; // Exponential backoff
        logger.warn(`Gemini attempt ${attempt} failed, retrying in ${delay}ms...`);
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  throw lastError;
};
