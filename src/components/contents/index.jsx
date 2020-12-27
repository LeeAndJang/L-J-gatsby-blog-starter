import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { ThumbnailContainer } from '../thumbnail-container'
import { ThumbnailItem } from '../thumbnail-item'
import { CATEGORY_TYPE } from '../../constants'

export const Contents = ({
  posts,
  countOfInitialPost,
  count,
  category,
  searchWord,
  clickTag,
  exposureGb,
}) => {
  const refinedPosts = useMemo(() =>
    posts
      .filter(({ node }) => {
        switch (exposureGb) {
          case 'SEARCH':
            return (
              node.html.toString().match(new RegExp(searchWord, 'i')) != null
            )
          case 'CATE':
            return (
              category === CATEGORY_TYPE.ALL ||
              node.frontmatter.category === category
            )
          case 'TAG':
            return node.frontmatter.tags.includes(clickTag)
          default:
            return category === CATEGORY_TYPE.ALL
        }
      })
      .slice(0, count * countOfInitialPost),
  )

  return (
    <ThumbnailContainer>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem
          node={node}
          key={`item_${index}`}
          imagePath={node.frontmatter.thumbnail}
        />
      ))}
    </ThumbnailContainer>
  )
}
