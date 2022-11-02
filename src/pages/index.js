import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import SVG from '../components/SVG/SVG';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
//import posts from './post/[slug]'

const Home = ({posts}) => {
  console.log(posts)
  return (
    <Layout>
      <Section grid> 
        <Hero />
        <BgAnimation /> 
       </Section>
      <SVG />
      <Projects />
      <Technologies />
      <Timeline />
      <Contact />
    </Layout>
  );
};


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

export default Home;
