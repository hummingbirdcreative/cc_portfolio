import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#EE5B25" }}>
      <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© All Rights Reserved. 2022 Christine Codes Portfolio.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/hummingbirdcreative">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/christinegrayb/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://docs.google.com/document/d/1Uc3kXrvCs_Bgv9SRnU3055eph4wS3Mso4BMLicThu6U/edit?usp=sharing">
          <AiFillFilePdf size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    </div>
  );
};

export default Footer;
