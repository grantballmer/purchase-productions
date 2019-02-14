import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/Layout";

const Example = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <div>This is the example page {post.frontmatter.title}</div>
    </Layout>
  );
};

export default Example;

export const aboutPageQuery = graphql `
  query ExamplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
