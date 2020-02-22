const postsFolder = './public/posts';
var webpack = require('webpack');
const fs = require('fs');

let array_of_files = []
fs.readdirSync(postsFolder).forEach(file => {
  array_of_files.push(file);
});

module.exports = {
  lintOnSave: true,
  configureWebpack: () => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'posts': array_of_files,
        })
      ]
    }
  },
};