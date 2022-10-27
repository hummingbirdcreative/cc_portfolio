import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { AnimatedGradientText, LeftSection } from './HeroStyles';
import { RightSection } from './ProfilePhotoStyles';

const Hero = (props) => (
  <>
    <Section style={{ height: "600px" }}row nopadding>
      <LeftSection>
        <SectionTitle main center style={{ marginTop: "50px", marginBottom: 1, paddingBottom: 1 }}>
          <AnimatedGradientText style={{ fontSize: "70px" }}>
            Hi, I'm Christine
          </AnimatedGradientText>
        </SectionTitle>
        <SectionText>
        I'm a full-stack software engineer based in Los Angeles
        </SectionText>
        <Button><a style={{ color: "white" }}href="#about">Learn More</a></Button>
      </LeftSection>
      <RightSection>
        <img style={{ height: "650px", width: "650px"}} src="https://i.imgur.com/lxxPqiY.png" />
      </RightSection>
    
    </Section>
  </>
);

export default Hero;