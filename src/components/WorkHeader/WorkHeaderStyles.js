import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #Defe7b;
  display: grid;
  //grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    //grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 20px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Marquee = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1em;
  padding: .5px;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  
`;
