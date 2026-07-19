import { callGemini } from './src/services/AI/geminiClient.js';

const prompt = "What is the capital of France?";

callGemini(prompt, false)
  .then(res => console.log('Result:', res))
  .catch(err => console.error('Error:', err));
