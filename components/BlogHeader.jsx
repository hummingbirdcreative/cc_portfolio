import React, { useState, useEffect } from 'react';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './Header/HeaderStyles';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';
import { GiDiamonds } from 'react-icons/gi';

import Link from 'next/link';
import { getCategories } from '../services';

const BlogHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#EE5B25", fontFamily: 'Cormorant' }}>
          <GiDiamonds size="3rem" /> <span style={{ fontWeight: 'bold', fontSize: '2rem' }}> &nbsp; Christine Graybosch</span>
        </a>
      </Link>
    </Div1>
      <Div3>
        <SocialIcons href="https://github.com/hummingbirdcreative">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/christinegrayb/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://cdn.hihello.me/cards/091e3346-6e11-4781-aef0-8c7ca222fd93/c579f989-48d8-4400-9aee-dd09ce19dd2b.pdf">
          <AiFillFilePdf size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default BlogHeader;