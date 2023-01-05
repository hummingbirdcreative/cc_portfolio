import Image from 'next/image';
import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';

type Stack = 'Django' | 'Python';
type LinkType = 'Github' | 'External';

type Link = {
  href: string;
  type: LinkType;
};

export interface Project {
  name: string;
  description: string;
  image: string;
  stacks: Stack[];
  links: Link[];
}

export const ProjectItem: FC<Project> = (project) => {
  const { name, description, image, stacks, links } = project;

  return (
    <div className="my-20 shadow-lg text-center rounded-lg">
      <Image
        className="my-4 border-gray-100 border-spacing-2 rounded-xl  border-2 inline"
        src={image}
        width={400}
        height={275}
        alt={`${name} image`}
      />
      <div className="p-6">
        <article className="mb-6">
          <h2 className="text-lg mb-2">{name}</h2>
          <p className="text-lg text-gray-400">{description}</p>
        </article>
        <div className="mb-6">
          <h3 className="mb-6">Stack</h3>
          <ul className="flex justify-center space-x-4">
            {stacks?.map((stack) => (
              <li
                key={stack}
                className="leading-[40px] bg-gray-100 rounded-md px-4 text-sm"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex justify-center space-x-4 mb-4">
          {links?.map((link) => {
            const { href, type } = link;
            let Icon: IconType;

            switch (type) {
              case 'External':
                Icon = BiLinkExternal;
                break;
              case 'Github':
                Icon = BsGithub;
                break;
            }

            return (
              <li key={href}>
                <Link href={href}>
                  <Icon size={35} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
