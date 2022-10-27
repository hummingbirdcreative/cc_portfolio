import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e3c9fb;
  padding: 0px;
  padding-top: 2rem;
 
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;