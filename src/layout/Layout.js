import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import WorkHeader from '../components/WorkHeader/WorkHeader';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <Container>
      <WorkHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
