var path = require('path')
const fs = require('fs');

function generateSidebarContents(dirPath, children, directoriesToExclude) {
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach(file => {
    let fullPath = `${dirPath}${file.name}/`;
    if (file.isDirectory()) {
      if (!directoriesToExclude.includes(file.name)) {
        let dirChildren = generateSidebarContents(fullPath, []);
        children.push({
          title: file.name,
          path: fullPath.substr(1),
          collapsable: true,
          children: dirChildren
        });
      }
    } else {
      if (path.extname(file.name) === ".md" && file.name.toLowerCase() != "readme.md") {
        children.push(fullPath.slice(1, -1));
      }
    }
  });
  return children;
}

// USAGE:
// Requires a base path IE: /notes/cert or /notes
// finds all the children for that including any folders with children inside
// will only add markdown files as children and uses a default directories to exclude of node_modules, .git, and .vuepress
// returns a list of children
function generateChildren(basePath, directoriesToExclude) {
  if(! basePath.startsWith(".")) basePath = `.${basePath}`;
  if(! basePath.endsWith('/')) basePath = `${basePath}/`

  return generateSidebarContents(basePath, [], directoriesToExclude || ['.vuepress', 'node_modules', '.git']);
}

module.exports.generateChildren = generateChildren;