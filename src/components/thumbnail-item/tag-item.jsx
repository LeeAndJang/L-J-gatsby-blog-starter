import React from 'react'

export const TagItem = ({ tags }) => {
  const tagStyle = {
    display: 'inline-block',
    marginRight: '1rem',
  }

  console.log(tags)
  return (
    <div>
      {tags.map((val, idx) => (
        <div style={tagStyle}>
          <h4>{'#' + val}</h4>
        </div>
      ))}
    </div>
  )
}
