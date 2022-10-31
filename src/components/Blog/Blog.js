import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Link from 'next/link'
import groq from 'groq'
// import client from '../client'
import { Container } from '../Contact/ContactStyles'

const Blog = ({posts}) => {
  return (
  <Section id="blog">
    <SectionDivider divider />
    <SectionTitle style={{ paddingBottom: "2rem" }}>Blog</SectionTitle>
    <SectionText>
        {/* {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )} */}

</SectionText>
</Section>
  )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}


export default Blog