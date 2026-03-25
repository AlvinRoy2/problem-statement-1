
const API_KEY = 'AIzaSyDgIx3aIP4F1xTbkz_GmZShXo9kKHAyZPQ';
const ENDPOINTS = [
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
  'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent',
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
];

async function test() {
  for (const url of ENDPOINTS) {
    console.log(`Testing ${url}...`);
    try {
      const res = await fetch(`${url}?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: 'Say hello' }] }] })
      });
      console.log(`Status: ${res.status}`);
      if (res.ok) {
        const data = await res.json();
        console.log('Success!', data.candidates[0].content.parts[0].text);
        break;
      } else {
        const err = await res.text();
        console.log('Error:', err);
      }
    } catch (e) {
      console.log('Fetch failed:', e.message);
    }
  }
}

test();
