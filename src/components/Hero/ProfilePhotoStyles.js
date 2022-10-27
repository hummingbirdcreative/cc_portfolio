import styled from 'styled-components';

export const RightSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;