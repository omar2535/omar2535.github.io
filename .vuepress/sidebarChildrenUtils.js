var path = require('path')
const fs = require('fs');

function generateSidebarContents(dirPath, children, directoriesToExclude) {
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach(file => {
    let fullPath = `${dirPath}${file.name}/`;
    if (file.isDirectory()) {
      if (!directoriesToExclude.includes(file.name)) {
        let dirChildren = generateSidebarContents(fullPath, [], directoriesToExclude);
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

/**
 * Returns all the children found in a directory as an array
 * @param {string} basePath the base path to the directory with children from the project's root. Example: ./notes/
 * @param {array} directoriesToExclude the directories that should not be added to children,
 *                                     defaults to ['.vuepress', 'node_modules', '.git'] when not given
 */
function generateChildren(basePath, directoriesToExclude) {
  if(! basePath.startsWith(".")) basePath = `.${basePath}`;
  if(! basePath.endsWith('/')) basePath = `${basePath}/`

  return generateSidebarContents(basePath, [], directoriesToExclude || ['.vuepress', 'node_modules', '.git']);
}

module.exports.generateChildren = generateChildren;