let { generateChildren } = require('./sidebarChildrenUtils');

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
      '/notes/': [
        {
          title: "Courses",
          path: "/notes/courses/",
          collapsable: false,
          children: generateChildren("/notes/courses/")
        },
        {
          title: "Guides",
          path: "/notes/guides/",
          collapsable: false,
          children: generateChildren("/notes/guides/")
        },
        {
          title: "CTF",
          path: "/notes/ctf/",
          collapsable: false,
          children: generateChildren("/notes/ctf")
        },
        {
          title: "Certs",
          path: "/notes/certs/",
          collapsable: false,
          children: generateChildren("/notes/certs")
        }
      ],
      '/blog/': [
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'images': '.vuepress/assets/images'
      }
    }
  },
};