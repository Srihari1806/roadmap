/**
 * build.js  —  Pre-compiles roadmap.jsx (JSX) → plain JS and injects into index.html
 * Run:  node build.js
 */
const fs   = require('fs');
const path = require('path');

const ROOT    = __dirname;
const JSX_IN  = path.join(ROOT, 'roadmap.jsx');
const HTML_OUT = path.join(ROOT, 'index.html');

// ── 1. Load Babel standalone from node_modules (install if missing) ────────────
let Babel;
try {
  Babel = require('@babel/standalone');
} catch (e) {
  console.error('Missing @babel/standalone. Run:  npm install --save-dev @babel/standalone');
  process.exit(1);
}

// ── 2. Read JSX source ────────────────────────────────────────────────────────
const jsx = fs.readFileSync(JSX_IN, 'utf8');
console.log(`Read roadmap.jsx  (${(jsx.length/1024).toFixed(1)} KB)`);

// ── 3. Compile JSX → plain JS ─────────────────────────────────────────────────
let compiled;
try {
  const result = Babel.transform(jsx, {
    presets: ['react'],
    filename: 'roadmap.jsx',
  });
  compiled = result.code;
  console.log(`Compiled to JS  (${(compiled.length/1024).toFixed(1)} KB)`);
} catch (err) {
  console.error('Babel compile error:', err.message);
  process.exit(1);
}

// ── 4. Mount call appended at end as plain JS (no JSX) ───────────────────
const mountCall = `
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ErrorBoundary, null, React.createElement(CombinedApp)));
`;

// ── 5. Write index.html ───────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Srihari's 6-Month Analyst Launch Plan | Execution Roadmap</title>
  <meta name="description" content="6-month execution roadmap: 4+ analytics projects, portfolio website, Sahitya Rachanalu platform, skill mastery for target Analyst roles." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #080810; color: #E8E8F0; font-family: 'Inter', sans-serif; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #080810; }
    ::-webkit-scrollbar-thumb { background: #252540; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #F4A72A; }
    #root { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script>
${compiled}
${mountCall}
  </script>
</body>
</html>
`;

fs.writeFileSync(HTML_OUT, html, 'utf8');
console.log(`Written index.html (${(html.length/1024).toFixed(1)} KB)  ✓`);
