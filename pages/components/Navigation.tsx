import Link from 'next/link';
import React from 'react';

type Props = {};

const NAV_ITEMS = [
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Technologies',
    href: '#technologies',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Blog',
    href: '#blog',
  },
];

export const Navigation = (props: Props) => {
  return (
    <nav className="px-4 py-6">
      <ul className="flex justify-end w-full">
        {NAV_ITEMS.map((item) => {
          const { name, href } = item;
          return (
            <li className="ml-4" key={name}>
              <Link
                className="block transition-all p-3 hover:bg-gray-400"
                href={href}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
