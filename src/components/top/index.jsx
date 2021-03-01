import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath, data }) => {
  const isRoot = location.pathname === rootPath
  const githubId = data.site.siteMetadata.social.github

  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      {isRoot && <GitHubIcon githubId={githubId} />}
    </div>
  )
}