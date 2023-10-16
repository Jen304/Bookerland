module.exports = {
  '*.js': ['npm run lint'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['npm run format'],
  'package.json': ['npm run format'],
  '*.vue': ['npm run lint'],
  '*.md': ['npm run lint:markdownlint', 'npm run format'],
};
