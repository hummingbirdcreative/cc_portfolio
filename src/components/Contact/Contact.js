import React, { useState }from 'react'

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Container } from './ContactStyles';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/16e978e0-5652-11ed-b82c-5d75eaa7ccff";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
        <>
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
        </>
      );
    }
    return (
        <Container>
        <Section id="contact" style={{ paddingTop: "4rem" }}>
        <SectionDivider colorAlt />
          <SectionTitle style={{ paddingTop: "4rem" }}>Contact</SectionTitle>
          <SectionText style={{ paddingBottom: "0" }}>
          <form action="https://public.herotofu.com/v1/16e978e0-5652-11ed-b82c-5d75eaa7ccff" method="post">
  <div>
    <label for="name">Your Name</label>
    <input name="Name" id="name" type="text" required />
  </div>
  <div>
    <label for="email">Your Email</label>
    <input name="Email" id="email" type="email" required  />
  </div>
  <div>
    <label for="message">Your Message</label>
    <input name="Message" id="message" type="message" required  />
  </div>
  <div>
    <input type="submit" value="Submit" />
  </div>
</form>
       
        </SectionText>                  
            
        </Section>
        </Container>
      );
    };

export default Contact