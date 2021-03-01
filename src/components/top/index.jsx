import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath, github_Id }) => {
  const isRoot = location.pathname === rootPath
  const githubId = github_Id

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
