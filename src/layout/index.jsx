import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'
import BackToTop from './back-to-top'

import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const renderBackToTop = () => {
    if (typeof window !== 'undefined') {
      return <BackToTop />
    }
  }

  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeSwitch />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        {renderBackToTop()}
        <Footer />
      </div>
    </React.Fragment>
  )
}
