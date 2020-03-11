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
          children: [
            "/notes/courses/practical-ethical-hacking.md"
          ]
        },
        {
          title: "Guides",
          path: "/notes/guides/",
          collapsable: false,
          children: [
          ]
        },
        {
          title: "CTF",
          path: "/notes/ctf/",
          collapsable: false,
          children: [
            {
              title: "TryHackme",
              path: "/notes/ctf/tryhackme/",
              collapsable: true,
              children: [
                "/notes/ctf/tryhackme/blue.md"
              ]
            }
          ]
        },
        {
          title: "Certs",
          path: "/notes/certs/",
          collapsable: false,
          children: [
            "/notes/certs/aws-certified-solutions-architect-associate.md"
          ]
        }
      ],
      '/blog/': [
      ]
    }
  }
};