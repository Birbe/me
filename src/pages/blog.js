import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { breakpoint } from "../theme/config";

const PostCard = styled(Card)`
  grid-column-end: span 6;
  color: red;

  ${breakpoint.md} {
    grid-column-end: span 3;
  }

  ${breakpoint.lg} {
    grid-column-end: span 2;
  }
`;

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map(({ node: { id, excerpt, frontmatter: { title, slug } } }) => (
      <PostCard key={id} to={slug} title={title}>
        {excerpt}
      </PostCard>
    ));

  return (
    <Layout>
      <Container className="grid">{Posts}</Container>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
};
