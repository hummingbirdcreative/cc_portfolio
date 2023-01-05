import React, { FC, PropsWithChildren } from 'react';

interface SectionHeadingProps {
  name: string;
}

const Heading: FC<SectionHeadingProps> = (props) => {
  const { name } = props;
  return (
    <h2 className="text-[30px] relative pt-12">
      <figure className="absolute top-0 h-2 w-[75px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl" />
      {name}
    </h2>
  );
};

const Wrapper: FC<PropsWithChildren> = (props) => {
  return (
    <section className="w-full my-6 py-6">
      <div className="container mx-auto">{props.children}</div>
    </section>
  );
};

export const Section = {
  Wrapper,
  Heading,
};
