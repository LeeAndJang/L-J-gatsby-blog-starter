import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import { ThumbnailImage } from './thumbnail-image'
// import imgA from './content/blog/React.js/images/spring_node_react_env.png';
import { useEffect, useState } from 'react'

import './index.scss'

export const ThumbnailItem = ({ node, imagePath }) => {
  const outStyle = {
    display: 'flex',
    boder: '1px solid black',
    flexDirection: 'row',
  }

  const inLeftStyle = {
    flexShrink: '1',
    marginRight: '10px',
    flexBasis: '300px',
    height: '150px',
    overflow: 'hidden',
  }

  const inRightStyle = {
    flexShrink: '1',
    flexBasis: imagePath ? '600px' : '900px',
  }

  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
      <div key={node.fields.slug}>
        <h3>{node.frontmatter.title || node.fields.slug}</h3>
        <div style={outStyle}>
          <ThumbnailImage path={imagePath} style={inLeftStyle}></ThumbnailImage>
          <div style={inRightStyle}>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        </div>
      </div>
    </Link>
  )
}
