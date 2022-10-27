import React from 'react'

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Container } from './ContactStyles';



const Contact = () => {
    return (

        <Container>
        <Section id="contact" style={{ paddingTop: "4rem" }}>
        <SectionDivider colorAlt />
          <SectionTitle style={{ paddingTop: "4rem" }}>Contact</SectionTitle>
          <SectionText style={{ paddingBottom: "0" }}>
            Email Form 
        </SectionText>                  
            
        </Section>
        </Container>
      );
    };

export default Contact