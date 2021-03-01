import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'
import BackToTop from './back-to-top'
import Sidebar from '../components/Sidebar'

import './index.scss'

export const Layout = ({ siteMetadata, location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  console.log(siteMetadata)

  const github_Id = siteMetadata.social.github

  const renderBackToTop = () => {
    if (typeof window !== 'undefined') {
      return <BackToTop />
    }
  }

  return (
    <React.Fragment>
      <Top
        title={title}
        location={location}
        rootPath={rootPath}
        github_Id={github_Id}
      />
      {/* <div> */}
      {/* <div className={'sidebar'} >
          <Sidebar />
        </div> */}
      <div
      // style={{
      //   marginLeft: `auto`,
      //   marginRight: `auto`,
      //   maxWidth: rhythm(75),
      //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      // }}
      >
        <ThemeSwitch />
        {/* <Header title={title} location={location} rootPath={rootPath} /> */}
        {children}
        {renderBackToTop()}
        <Footer siteMetadata={siteMetadata} />
      </div>
      {/* </div> */}
    </React.Fragment>
  )
}
