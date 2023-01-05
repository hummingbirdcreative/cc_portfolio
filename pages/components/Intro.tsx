import React from 'react';

type Props = {};

export const Intro = (props: Props) => {
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-bold text-[40px]">Hi, I'm Christine</h1>
      <p>I'm a full-stack software engineer based in Los Angeles.</p>
      <button>Learn More</button>
    </div>
  );
};
