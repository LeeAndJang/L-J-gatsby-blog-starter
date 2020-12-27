module.exports = {
  title: `test2`,
  description: `Blog posted about ...`,
  author: `이정우`,
  introduction: `자바 웹 개발의 진입장벽이 많이 낮아졌습니다. 아직도 웹개발을 고민하시나요? 한달이면 인문계인 당신도 웹개발자가 될 수 있습니다.`,
  siteUrl: `https://ramsbaby.netlify.app`, // Your blog site url
  social: {
    github: `ramsbaby`, // Your GitHub account
  },
  icon: `content/assets/React.js_logo-512.png`, // Add your favicon
  keywords: [`blog`, `ramsbaby`, `gatsby-blog`],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com.
    utterances: 'Ramsbaby/ramsbaby-blog-starter', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'ramsbaby',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: 'UA-179073418-1', // Add your google analytics tranking ID
  seo: {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://ramsbaby.netlify.app',
      sitemap: 'https://ramsbaby.netlify.app/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
}
