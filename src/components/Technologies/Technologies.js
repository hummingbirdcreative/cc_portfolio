import React from 'react';
import { DiFirebase, DiPython, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Container, List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Container>
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle style={{ paddingBottom: "2rem" }}>Technologies</SectionTitle>
    <SectionText>
      I've been able to work with a range of technologies from back-end To design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python<br />
            Javascript<br />
            HTML<br />
            CSS<br />
            EJS<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Node<br />
            Firebase<br />
            PostgreSQL<br />
            MongoDB<br />
            {/* AWS<br /> */}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Libraries/Frameworks</ListTitle>
          <ListParagraph>
            React.js<br />
            Express.js<br />
            Django<br />
            Bootstrap<br />
            Tailwind<br />
            Materialize<br />
            Styled Components<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  
  </Section>
  </Container>
);

export default Technologies;
