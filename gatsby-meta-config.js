module.exports = {
  title: `L&J Blog Starter`,
  description: `L&J 블로그`,
  author: `L&J`,
  introduction: `L&J 블로그에 오신것을 환영합니다.`,
  siteUrl: `https://l-j-gatsby-blog-starter.netlify.app/`, // Your blog site url
  social: {
    github: `LeeAndJang`, // Your GitHub account
    lblog: `https://ramsbaby.netlify.app/`,
    jblog: `https://goguj.netlify.app/`,
  },
  icon: `content/assets/React.js_logo-512.png`, // Add your favicon
  keywords: [`blog`, `LeeAndJang`, `L&J`],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com.
    utterances: 'LeeAndJang/L-J-gatsby-blog-starter', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'LeeAndJang',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: '', // Add your google analytics tranking ID
  seo: {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://l-j-gatsby-blog-starter.netlify.app/',
      sitemap: 'https://l-j-gatsby-blog-starter.netlify.app/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
}
