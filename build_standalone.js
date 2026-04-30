const fs = require('fs');

try {
  const html = fs.readFileSync('template.html', 'utf8');
  const jsx = fs.readFileSync('roadmap.jsx', 'utf8');

  // Replace the external script tag with the inline script
  const standaloneHtml = html.replace(
    '<script type="text/babel" src="roadmap.jsx"></script>',
    `<script type="text/babel">\n${jsx}\n</script>`
  );

  fs.writeFileSync('index.html', standaloneHtml);
  console.log('Successfully created index.html for GitHub Pages!');
} catch (err) {
  console.error('Error:', err);
}
