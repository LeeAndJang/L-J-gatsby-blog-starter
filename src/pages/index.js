import { graphql } from 'gatsby'
import _ from 'lodash'
import React, { useMemo } from 'react'
import { Bio } from '../components/bio'
import { Category } from '../components/category'
import { Contents } from '../components/contents'
import { Head } from '../components/head'
import { HOME_TITLE } from '../constants'
import { useCategory } from '../hooks/useCategory'
import { useSearchWord } from '../hooks/useSearchWord'
import { useTag } from '../hooks/useTag'
import { useExposureGb } from '../hooks/useExposureGb'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useRenderedCount } from '../hooks/useRenderedCount'
import { useScrollEvent } from '../hooks/useScrollEvent'
import { Layout } from '../layout'
import { Search } from '../components/search'
import { Tags } from '../components/tags'
import { Header } from '../components/header'
import Sidebar from '../components/Sidebar'
import { rhythm } from '../utils/typography'
import './index.scss'


import * as Dom from '../utils/dom'
import * as EventManager from '../utils/event-manager'

const rootPath = `${__PATH_PREFIX__}/`

const BASE_LINE = 80

function getDistance(currentPos) {
  return Dom.getDocumentHeight() - currentPos
}

export default ({ data, location }) => {
  const { siteMetadata } = data.site
  const { countOfInitialPost } = siteMetadata.configs
  const posts = data.allMarkdownRemark.edges  
  const categories = useMemo(
    () => _.uniq(posts.map(({ node }) => node.frontmatter.category)),
    []
  )
  const tags = data.tagsGroup.group;


  const [count, countRef, increaseCount]      = useRenderedCount()
  const [category, selectCategory]            = useCategory()
  const [searchWord, inputSearchWord]         = useSearchWord()
  const [clickTag, selectTag]                 = useTag()
  const [exposureGb, selectExposureGb]        = useExposureGb()

  useIntersectionObserver()
  useScrollEvent(() => {
    const currentPos = window.scrollY + window.innerHeight
    const isTriggerPos = () => getDistance(currentPos) < BASE_LINE
    const doesNeedMore = () =>
      posts.length > countRef.current * countOfInitialPost

    return EventManager.toFit(increaseCount, {
      dismissCondition: () => !isTriggerPos(),
      triggerCondition: () => isTriggerPos() && doesNeedMore(),
    })()
  })

  return (
    <Layout location={location} title={siteMetadata.title}>
        <div>
          <div className={'sidebar'}>
            <Sidebar>
              <Tags
                  tags={tags}
                  selectTag={selectTag}
                  selectExposureGb={selectExposureGb}
                />
              </Sidebar>
            
          </div>
        </div>
        <div 
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(45),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header title={siteMetadata.title} location={location} rootPath={rootPath} />
          <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />      
          <Bio />
          <Search inputSearchWord={inputSearchWord} 
                  selectExposureGb={selectExposureGb}
          />
          <Category
            categories={categories}
            category={category} 
            selectCategory={selectCategory}
            selectExposureGb={selectExposureGb}
          />
          <Contents
            posts={posts}
            countOfInitialPost={countOfInitialPost}
            count={count}
            category={category}
            searchWord={searchWord}
            clickTag={clickTag}
            exposureGb={exposureGb}
          />
        </div>      
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "yyyy-MM-dd")
            title
            category
            draft
            tags
          }
          html
        }
      }
    }
    tagsGroup : allMarkdownRemark(limit:2000){
			group(field: frontmatter___tags){
        fieldValue
      	totalCount
      }
    }
  }
`
