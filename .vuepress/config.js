let generateChildren = require('@omar2535/vuepress-sidebar-children-autogenerator');

module.exports = {
  title: "Omar2535",
  description: "Notes",
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/', target: '_self' },
      { text: 'Notes', link: '/notes/', target: '_self'},
      { text: 'About me', link: '/about/', target: '_self' }
    ],
    sidebar: 
    {
      // sidebar for notes section
      '/notes/': generateChildren('/notes/'),
      '/blog/': [
      ]
    }
  },
  plugins: [
    [
      'vuepress-plugin-mathjax',
    ],
  ],
};