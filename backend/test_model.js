import { callGemini } from './src/services/AI/geminiClient.js';
import { env } from './src/config/env.js';

async function run() {
  try {
    const result = await callGemini('Return a valid JSON object with {"status": "ok"}', true);
    console.log('Success:', result);
  } catch (err) {
    console.error('Error:', err);
  }
}
run();
