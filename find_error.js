const Babel = require('@babel/standalone');
const fs = require('fs');
const { execSync } = require('child_process');

const working322 = execSync('git show 322d0d4:roadmap.jsx', { encoding: 'buffer' }).toString('utf8').replace(/\r\n/g, '\n');
const lines322 = working322.split('\n');

// Find ALL references to content-os in the working version
lines322.forEach((l, i) => {
  if (l.toLowerCase().includes('content') && (l.includes('os') || l.includes('OS') || l.includes('content-os'))) {
    if (i > 3000) console.log((i+1) + ': ' + l.substring(0, 100));
  }
});

// Show the Roadmap return's closing structure
// Find the last `return (` in Roadmap (around line 2900-3500 based on 5691 lines)
let returnIdx = -1;
for (let i = 2900; i < 3600; i++) {
  if (lines322[i] && lines322[i].trim() === 'return (') returnIdx = i;
}
console.log('\nLast return( in Roadmap at line:', returnIdx + 1);

// Show the END of Roadmap's JSX 
for (let i = 3400; i < 3600; i++) {
  if (!lines322[i]) continue;
  const l = lines322[i].trim();
  if (l === ');' || l === '}' || l === ')}' || l === '</div>') {
    console.log((i+1) + ': [' + lines322[i] + ']');
  }
}
