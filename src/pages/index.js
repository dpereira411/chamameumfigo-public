import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { BlogPostTemplate } from '../templates/blog-post'
import Content, { HTMLContent } from '../components/Content'

const IndexPage = ({ data }) => {
  const post = data.allMarkdownRemark.nodes[0]

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(limit: 10, sort: {fields: [frontmatter___featuredpost, frontmatter___date], order: [DESC, ASC]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
      nodes {
        frontmatter {
          date
          featuredpost
        }
      }
    }
  }