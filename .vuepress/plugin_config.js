let pluginConfig = [
  ['vuepress-plugin-mathjax'],
  '@vuepress/back-to-top',
  'vuepress-plugin-smooth-scroll',
  [
    'disqus',
    { 
      "shortname": "thaomar-website"
    }
  ],
  ['vuepress-plugin-code-copy', false],
  'vuepress-plugin-latex',
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk', 
      options: {
        clientID: '9f9d92cb188cb13ac0b9',
        clientSecret: '568586ce3927803255eaf413edae97ecab26900b',
        repo: 'omar2535',
        owner: 'omar2535',
        admin: ['omar2535'],
        distractionFreeMode: false,
        id: '<%- frontmatter.commentid || frontmatter.permalink %>',
        title: '「Comment」<%- frontmatter.title %>',
        body: '<%- frontmatter.title %>：<%-window.location.origin %><%- frontmatter.to.path || window.location.pathname %>',
        labels: ['Gitalk']
      }
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    },
  ],
  ['vuepress-plugin-reading-time'],
  ['reading-progress'],
  ['robots', {
    /**
     * @host
     * Mandatory, You have to provide the host URL
     */
    host: "https://mmorzco.com",
    /**
     * @disallowAll
     * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
     */
    disallowAll: false,
    /**
     * @allowAll
     * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
     */
    allowAll: true,
    /**
     * @sitemap
     * Optional, by default: sitemap.xml
     */
    sitemap: "/sitemap.xml",
    /**
     * @policies
     * Optional, by default: null
     */
    policies: [{
      userAgent: '*',
      allow: [ // Optional: Allowed paths. 
        'notes', 'blog'
      ]
    }]
  }]
];

module.exports = pluginConfig;