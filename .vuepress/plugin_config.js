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
];

module.exports = pluginConfig;
