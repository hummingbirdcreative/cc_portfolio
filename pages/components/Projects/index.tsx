import React from 'react';
import { Section } from '../Atoms/Section';
import { PROJECT_ITEMS } from './constants';
import { ProjectItem } from './item';

type Props = {};

export const Projects = (props: Props) => {
  return (
    <Section.Wrapper>
      <Section.Heading name="Projects" />
      {PROJECT_ITEMS.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </Section.Wrapper>
  );
};
