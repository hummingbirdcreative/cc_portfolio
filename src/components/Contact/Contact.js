import React, { useState }from 'react'

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Container } from './ContactStyles';
import Button from '../../styles/GlobalComponents/Button';

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
          <form style={{ display: "flex", flexDirection:"row" }} action="https://public.herotofu.com/v1/16e978e0-5652-11ed-b82c-5d75eaa7ccff" method="post">
  <div>
    <input style={{ fontSize: "20px", padding: "4px", color:"#7187C3", marginRight: "4px", }} placeholder="Your Name" name="Name" id="name" type="text" required />
  </div>
  <div>
    <input style={{ fontSize: "20px", padding: "4px", color:"#7187C3", marginRight: "4px" }} placeholder="Your Email" name="Email" id="email" type="email" required  />
  </div>
  <div>
    <input style={{ fontSize: "20px", padding: "4px", color:"#7187C3", marginRight: "4px" }} placeholder="Your Message" name="Message" id="message" type="message" required  />
  </div>
  

  <div>
  <Button style={{ width:"50%" }}><input style={{ background: "none", border: "none", color: "white" }}type="submit" value="Submit"/></Button>
  </div>
 
  
</form>
       
        </SectionText>                  
            
        </Section>
        </Container>
      );
    };

export default Contact