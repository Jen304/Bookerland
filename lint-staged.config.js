module.exports = {
  '*.js': ['npm run lint'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['npm run format --parser json'],
  'package.json': ['npm run format --parser json'],
  '*.vue': ['npm run lint'],
  '*.md': ['npm run lint:markdownlint', 'npm run format'],
};
