import React from 'react';
import { GiDiamonds } from 'react-icons/gi';

const Available = () => (
  <span>
    <GiDiamonds size="1rem" /> &nbsp; Available For Work &nbsp;{' '}
  </span>
);

const WorkHeader = () => (
  <div className="p-[0.5px] overflow-hidden">
    <Available />
  </div>
);

export default WorkHeader;
