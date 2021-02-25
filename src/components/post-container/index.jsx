import React from 'react'
import './index.scss'

export const PostContainer = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)
