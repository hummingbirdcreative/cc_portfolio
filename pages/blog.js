import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, BlogLayout } from '../components';
import { getPosts } from '../services';
import Footer from '../components/Footer/Footer'

import "tailwindcss/tailwind.css";

export default function Home({ posts }) {
  return (
    <>
    <BlogLayout> 
    <div className="container mx-auto px-10 mb-8 pt-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
    {/* <FeaturedPosts /> */}
    </BlogLayout>
    <Footer />
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}