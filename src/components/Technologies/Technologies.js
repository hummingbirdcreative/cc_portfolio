import React from 'react';
import { DiFirebase, DiPython, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle style={{ paddingBottom: "2rem" }}>Technologies</SectionTitle>
    <SectionText>
      I've been able to work with a range a technologies from Back-end To Design.
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
            AWS<br />
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
            React<br />
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
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
