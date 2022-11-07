import styled from 'styled-components';

export const RightSection = styled.div`
  max-width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    
    display: none;
    
  }
`;