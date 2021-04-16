import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

import { color, font } from "../theme/config";

const PostTitle = styled.h1`
  margin-bottom: 0.25rem;
`;

const PostDate = styled.h2`
  color: ${color.text};
  font-weight: ${font.weight.normal};
  font-size: ${font.size.base};
`;

const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const PostContent = styled.article`
  max-width: 960px;
`;

const PostTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => {
  return (
    <Layout>
      <Container>
        <PostHeader>
          <PostTitle>{title}</PostTitle>
          <PostDate>{date}</PostDate>
        </PostHeader>
        <PostContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        title
      }
    }
  }
`;

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};
