import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Container } from './ProjectsStyles';
import {  Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

const Projects = () => (
  <Container>
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <a href={p.live}>
              <Img src={p.image} />
            </a>
            <TitleContent>
            <a href={p.live}>
              <HeaderThree title>{p.title}</HeaderThree>
              </a>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <br />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.code}><AiFillGithub size="3.5rem">Code</AiFillGithub></ExternalLinks>
              <ExternalLinks href={p.live}><FiExternalLink size="3.5rem">Live</FiExternalLink></ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
  </Container>
);

export default Projects;