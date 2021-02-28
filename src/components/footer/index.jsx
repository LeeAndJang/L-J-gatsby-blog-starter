import React from 'react'

import './index.scss'

export const Footer = ({ data }) => {
  const metaData = data.site.siteMetadata

  const { social, title } = metaData

  return (
    <footer className="footer">
      ©<a href={`https://github.com/` + social.github}>{title}</a>, Built with{' '}
      <a href={`https://github.com/` + social.github}>{social.github}</a>
    </footer>
  )
}
