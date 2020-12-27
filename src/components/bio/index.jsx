import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              />
              <div className="author-name">
                <span className="author-name-prefix">Written by</span>
                <Link to={'/about'} className="author-name-content">
                  <span>Lee And Jang</span>
                </Link>
                <div className="author-introduction">{introduction}</div>
                <p className="author-socials">
                  {social.github && (
                    <a href={`https://github.com/${social.github}`}>GitHub</a>
                  )}
                  {social.lblog && <a href={`${social.lblog}`}>L's Blog</a>}
                  {social.github && <a href={`${social.jblog}`}>J's Blog</a>}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/leeandjang.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          github
          lblog
          jblog
        }
      }
    }
  }
`

export default Bio
