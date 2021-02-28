import React from 'react'

import './index.scss'

export const Footer = ({ data }) => {
  const metaData = data.site.siteMetadata

  const { social } = metaData

  return (
    <footer className="footer">
      ©<a href={`https://github.com/` + social.github}>LeeAndJang</a>, Built
      with <a href={`https://github.com/` + social.github}>{social.github}</a>
    </footer>
  )
}
