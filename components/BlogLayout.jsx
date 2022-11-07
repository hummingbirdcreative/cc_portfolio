import React from 'react';
import BlogHeader from './BlogHeader';

const BlogLayout = ({ children }) => (
  <>
    <BlogHeader />
    {children}
  </>
);

export default BlogLayout;