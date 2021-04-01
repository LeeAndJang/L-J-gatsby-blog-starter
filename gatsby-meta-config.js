module.exports = {
  hometitle: `L&J Blog Starter`, // 브라우저 탭에 표시될 블로그 이름.(조금만 길어도 짤리므로, 짧고 강한 이름 추천 ^^;)
  title: `L&J Blog Starter`, //메인페이지에 표시될 블로그 이름
  description: `L&J 블로그`,
  author: `L&J`, // 메인페이지 > Written by 뒤에 들어갈 이름
  introduction: `L&J 블로그에 오신것을 환영합니다.`,
  siteUrl: `https://l-j-gatsby-blog-starter.netlify.app/`, // Your blog site url
  social: {
    github: `LeeAndJang/L-J-gatsby-blog-starter`, // Your GitHub account
    lblog: `https://ramsbaby.netlify.app/`,
    jblog: `https://goguj.netlify.app/`,
    portfolio: `` // Your Portfolio Url
  },
  othersite: [
    //블로그 설명 글 밑에 표시될 타사이트들을 추가해보세요. 예:) name : 표시될이름, url : 연결될 사이트 주소
    {
      name: `Blog OpenSource Github`,
      url: `https://github.com/LeeAndJang/L-J-gatsby-blog-starter`,
    },
    {
      name: `L's blog`,
      url: `https://ramsbaby.netlify.app/`,
    },
    {
      name: `J's blog`,
      url: `https://goguj.netlify.app/`,
    },
  ],
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
    //Google Analytics 연동에 필요한 host정보와 sitemap 입력하세요.
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://dev-gogu.netlify.app',
      sitemap: 'https://dev-gogu.netlify.app/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },

  // Google Search Console 사이트 소유권 확인용 코드.
  // 구글서치콘솔을 이용하시려면 이곳에 구글에서 제공한 소유권확인용 HTML태그 입력하세요.(google-site-verification)
  gsc: 'HZflfCKdZvjC8qWB5opaiDcDmA9vTHZa-_uamDrd-Sc',
}
