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
    host: "https://thaomar.com",
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