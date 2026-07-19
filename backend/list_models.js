import { env } from './src/config/env.js';

async function run() {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${env.GEMINI_API_KEY}`);
  const data = await res.json();
  console.log(data.models.map(m => m.name).join('\n'));
}
run();
