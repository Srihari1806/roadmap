const fs = require('fs');

try {
  const html = fs.readFileSync('index.html', 'utf8');
  const jsx = fs.readFileSync('roadmap.jsx', 'utf8');

  // Replace the external script tag with the inline script
  const standaloneHtml = html.replace(
    '<script type="text/babel" src="roadmap.jsx"></script>',
    `<script type="text/babel">\n${jsx}\n</script>`
  );

  fs.writeFileSync('Standalone_Roadmap.html', standaloneHtml);
  console.log('Successfully created Standalone_Roadmap.html!');
} catch (err) {
  console.error('Error:', err);
}
