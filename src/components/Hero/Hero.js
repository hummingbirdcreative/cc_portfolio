import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { AnimatedGradientText, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center style={{ marginTop: "50px", marginBottom: 1, paddingBottom: 1 }}>
          <AnimatedGradientText style={{ fontSize: "70px" }}>
            Hi, I'm Chrisine
          </AnimatedGradientText>
        </SectionTitle>
        <SectionText>
        a full-stack software engineer
        </SectionText>
        <Button><a style={{ color: "white" }}href="#about">Learn More</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;