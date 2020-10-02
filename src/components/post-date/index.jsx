import React from 'react'

import './index.scss'

export const PostDate = ({ date }) => {
  console.log({ date })
  return <p className="post-date">{date}</p>
}
