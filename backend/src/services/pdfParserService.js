import pdfParse from 'pdf-parse';
import fs from 'fs/promises';
import { logger } from '../utils/logger.js';
import { AppError } from '../utils/AppError.js';

/**
 * Extract raw text from a PDF file
 */
export const extractTextFromPdf = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath);
    const data = await pdfParse(dataBuffer);

    const rawText = data.text
      .replace(/\n{3,}/g, '\n\n')  // Normalize extra newlines
      .replace(/\s{2,}/g, ' ')      // Normalize multiple spaces
      .trim();

    return {
      rawText,
      wordCount: rawText.split(/\s+/).filter(Boolean).length,
      charCount: rawText.length,
      pageCount: data.numpages,
      language: 'en', // TODO: detect language
    };
  } catch (err) {
    logger.error('PDF parsing error:', err);
    if (err.message?.includes('Bad XRef')) {
      throw new AppError('PDF file is corrupted or encrypted. Please try a different file.', 400);
    }
    throw new AppError('Failed to extract text from PDF.', 400);
  }
};

/**
 * Extract text from raw string (text upload)
 */
export const extractTextFromString = (text) => {
  const rawText = text.replace(/\n{3,}/g, '\n\n').trim();
  return {
    rawText,
    wordCount: rawText.split(/\s+/).filter(Boolean).length,
    charCount: rawText.length,
    pageCount: null,
    language: 'en',
  };
};
