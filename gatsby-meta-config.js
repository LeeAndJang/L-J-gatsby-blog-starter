module.exports = {
  title: `gogu.j blog`,
  description: `Blog posted about ...`,
  author: `[gogu.j]`,
  introduction: `Dev gogu.j`,
  siteUrl: `https://goguj.netlify.app`, // Your blog site url
  social: {
    github: `jcwooo`, // Your GitHub account
    instagram: `gogu.j`,
  },
  icon: `content/assets/ico_gogu.png`, // Add your favicon
  keywords: [`blog`,`gogu`,`gatsby-blog`],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com.
    utterances: 'jcwooo/ggb', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: '',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: 'UA-180861143-1', // Add your google analytics tranking ID
  seo : {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://dev-gogu.netlify.app',
      sitemap: 'https://dev-gogu.netlify.app/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
}
