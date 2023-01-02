import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';
import { NavLink } from './NavLink';
import Image from 'next/image';

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="#tech">Technologies</NavLink>
          </li>
          <li>
            <NavLink href="#about">About</NavLink>
          </li>
          <li>
            <NavLink href="https://portfolio-blog-blue.vercel.app/">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink href="/">
              <Image
                alt="Christine Graybosch Logo"
                className="mt-0"
                src="https://i.imgur.com/Kq4TEhf.jpg"
                title="logo"
                width={40}
                height={40}
              />
            </NavLink>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>

      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 10px;
          padding: 10px;
          overflow: hidden;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 25px;
        }
        .hamburger {
          display: none;
          z-index: 6;
        }
        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }

          .navigation ul {
            display: ${hamburgerOpen ? 'inline' : 'none'};
            background-color: white;
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: fixed;
          }
        }
      `}</style>
    </div>
  );
}
