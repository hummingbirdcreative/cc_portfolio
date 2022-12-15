import React from 'react';
import { GiDiamonds } from 'react-icons/gi';

import { Container, Marquee } from './WorkHeaderStyles';

const WorkHeader = () =>  (
  <Container>
    <Marquee>
      <marquee direction="left" scrollamount="8" behavior="scroll">
        <GiDiamonds size="1rem" /> &nbsp; Available For Work &nbsp; <GiDiamonds size="1rem" />
        &nbsp; Available For Work &nbsp; <GiDiamonds size="1rem" />
        &nbsp; Available For Work &nbsp; <GiDiamonds size="1rem" />
      </marquee>
    </Marquee>
  </Container>
);

export default WorkHeader;
