import GitHubCalendar from "react-github-calendar";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I am a full-stack web developer who enjoys creating precise code to solve problems creatively. With a background in design and customer service, I am passionate about visual aesthetics and good design that works uniquely for each client’s needs. I am a problem solver who has cultivated the ability to adapt quickly and find concise solutions.      </SectionText>
      <p style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I Code
      </h1>
      <GitHubCalendar
        username="hummingbirdcreative"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </p>
    <br />
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
