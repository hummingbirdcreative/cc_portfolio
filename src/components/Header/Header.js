import Link from 'next/link';
import React from 'react';
import Hamburger from "../Hamburger/Hamburger"
import { useState } from 'react';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Nav(){

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
  }

  return(
      <div>
          <div className="navigation">
              <ul>
      <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="https://portfolio-blog-blue.vercel.app/">
          <a>
          <NavLink>Blog</NavLink>
          </a>
        </Link>
      </li> 
      <li>
      <a href="/"><NavLink><img style={{ height: "40px", width: "40px", marginTop: "none"}} src="https://i.imgur.com/Kq4TEhf.jpg" title="logo" /></NavLink></a> 
      </li> 
      </Div2>
    </ul>
  
      
                  <div className="hamburger" onClick={toggleHamburger}>
                      <Hamburger isOpen={hamburgerOpen}/>
                  </div>
          </div>


          <style jsx>{`
              .navigation{
                  width: 100%;
                  height: 50px;
              }
              
              
              .navigation ul{
                  display:flex;
                  flex-wrap: wrap;
                  float: right;
                  margin: 10px;
                  padding: 10px;
                  overflow: hidden;
              }
              .navigation ul li{
                  list-style-type: none;
                  padding-right: 25px;
              }
              .hamburger{
                  display: none;
                  z-index: 6;
              } 
              @media (max-width: 767px){
                
                  .hamburger{
                      display:fixed;
                      padding-top: 10px;
                      margin-left: 10px;
                      z-index: 6;
                  }
        
                 
                  .navigation ul{
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
  )

}