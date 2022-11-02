import styled from 'styled-components';

export const Container = styled.div`
  background-color: #Defe7b;
  padding: 1rem;
  padding-top: 5rem;
  margin-top:-5px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;