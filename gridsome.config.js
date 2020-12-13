// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Adamův blog',
  siteDescription: 'Je škoda, že hromada zajímavého obsahu v angličtině úplně míjí českou populaci.',

  templates: {
    Post: '/blog/:url',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'cz-cz',
          'en-us'
        ],
        pathAliases: { // path segment alias for each locales
          'cz-cz': 'cz',
          'en-us': 'en'
        },
        // fallbacklocale: 'cz-cz', // fallback language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
        messages: {
          'cz-cz': require('./src/locales/cz-cz.json'),
          'en-us': require('./src/locales/en-us.json'),
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-185057243-1'
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
        'gridsome-remark-katex'
      ]
    }
  }
}
