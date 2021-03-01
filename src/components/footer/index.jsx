import React from 'react'

import './index.scss'

export const Footer = ({ siteMetadata }) => {
  const metaData = siteMetadata

  const { social, title } = metaData

  return (
    <footer className="footer">
      ©<a href={`https://github.com/` + social.github}>{title}</a>, Built with{' '}
      <a href={`https://github.com/` + social.github}>{social.github}</a>
    </footer>
  )
}
