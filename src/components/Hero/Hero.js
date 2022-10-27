import React from 'react';

import { HeroSection, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <HeroSection row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I'm Christine <br />
          Welcome to my personal portfolio
        </SectionTitle>
        <SectionText>
        I am a software engineer who is always learning and creating. 
        </SectionText>
        <Button onClick={() => window.location = '#about'}>Learn More</Button>
      </LeftSection>
    </HeroSection>
  </>
);

export default Hero;