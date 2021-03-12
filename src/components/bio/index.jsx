import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction, othersite } = data.site.siteMetadata

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
                <Link to={social.Portfolio} className="author-name-content">
                  <span>{author}</span>
                </Link>
                <div className="author-introduction">{introduction}</div>
                <p className="author-socials">
                  {othersite.map((val, idx) => (
                    <a href={val.url} key={`othersite_a_tag_` + idx}>
                      {`#` + val.name}
                    </a>
                  ))}
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
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
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
          Portfolio
        }
        othersite {
          name
          url
        }
      }
    }
  }
`

export default Bio
