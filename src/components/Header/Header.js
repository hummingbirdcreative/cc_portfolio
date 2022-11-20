import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';
import { GiDiamonds } from 'react-icons/gi';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#EE5B25", fontFamily: 'Cormorant' }}>
          <GiDiamonds size="3rem" /> <span style={{ fontWeight: 'bold', fontSize: '2rem' }}> &nbsp; Christine Graybosch</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/hummingbirdcreative">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/christinegrayb/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://cdn.hihello.me/cards/091e3346-6e11-4781-aef0-8c7ca222fd93/d060a486-cffd-4764-9a84-20b3dc80b26a.pdf">
          <AiFillFilePdf size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
