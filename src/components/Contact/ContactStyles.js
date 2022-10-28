import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e3c9fb;
  padding: 0px;
  padding-top: 2rem;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  `;

export const Input = styled.input`
 fontSize: 20px;
 padding: 4px;
 color: #7187C3; 
 margin-right: 4px;
 border: white;
 @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 10px;
    justify-content: center;
 }
  
  `;