const postsFolder = './public/posts';
var webpack = require('webpack');
const fs = require('fs');

let array_of_files = []
fs.readdirSync(postsFolder).forEach(file => {
  array_of_files.push(file);
});

// https://stackoverflow.com/questions/52420663/unable-to-require-fs-with-vue-cli-3/53502487
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