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
import Particles from '../components/react-particles-js'

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
  const tags = data.tagsGroup.group

  const [count, countRef, increaseCount] = useRenderedCount()
  const [category, selectCategory] = useCategory()
  const [searchWord, inputSearchWord] = useSearchWord()
  const [clickTag, selectTag] = useTag()
  const [exposureGb, selectExposureGb] = useExposureGb()

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

  // particles: {
  //   number: {
  //     value: 100,
  //   },
  //   size: {
  //     value: 3,
  //   },
  // },
  // interactivity: {
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: 'repulse',
  //     },
  //   },
  // },

  return (
    <Layout location={location} title={siteMetadata.title}>
      <div className="site-wrapper">
        <Particles
          className="snow"
          focusable="true"
          aria-hidden=""
          params={{
            particles: {
              color: {
                value: '#FFE08C',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000',
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  width: 100,
                  height: 100,
                },
              },
              number: {
                value: 200,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 10,
                random: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'bottom',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'remove',
                },
              },
              modes: {
                remove: {
                  particles_nb: 10,
                },
              },
            },
          }}
        ></Particles>
        <div>
          <div className={'sidebar-container'}>
            <div className={'sidebar'}>
              <Sidebar>
                <p>Tag Collection</p>
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
            <Header
              title={siteMetadata.title}
              location={location}
              rootPath={rootPath}
            />
            <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
            <Bio />
            <Search
              inputSearchWord={inputSearchWord}
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
        </div>
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
          excerpt(pruneLength: 240, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "yyyy-MM-dd")
            title
            category
            draft
            tags
            thumbnail
          }
          html
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
