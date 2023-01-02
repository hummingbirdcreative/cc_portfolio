import React from 'react';
import { GiDiamonds } from 'react-icons/gi';

import { Container, Marquee } from './WorkHeaderStyles';

const WorkHeader = () => (
  <div className="p-[0.5px] overflow-hidden">
    <div className="flex">
      <marquee direction="left" scrollamount="8" behavior="scroll">
        <GiDiamonds size="1rem" /> &nbsp; Available For Work &nbsp;{' '}
        <GiDiamonds size="1rem" />
        &nbsp; Available For Work &nbsp; <GiDiamonds size="1rem" />
        &nbsp; Available For Work &nbsp; <GiDiamonds size="1rem" />
      </marquee>
    </div>
  </div>
);

export default WorkHeader;
