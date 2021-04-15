import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";

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
      <h1>{title}</h1>
      <h2>{date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
