let generateChildren = require('@omar2535/vuepress-sidebar-children-autogenerator');
let pluginConfig = require('./plugin_config');

module.exports = {
  title: "Omar2535",
  description: "Notes",
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/', target: '_self' },
      { text: 'Misc', link: '/misc/', target: '_self'},
      { text: 'About me', link: '/about/', target: '_self' }
    ],
    sidebar: 
    {
      // sidebar for notes section
      '/misc/': generateChildren('/misc/'),
      '/blog/': [
      ]
    },
    // lastUpdated: 'Last Updated',
  },
  plugins: pluginConfig
};
