import React from 'react';
import { graphql } from 'gatsby';

const Example = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>This is the example page {post.frontmatter.title}</div>
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
