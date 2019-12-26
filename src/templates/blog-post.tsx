import React from 'react';

export default function BlogPost({ pageContext }) {
  return (
    <>
      <h1>Title: {pageContext.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </>
  );
}
