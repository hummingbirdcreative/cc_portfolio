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
    padding-top: 10px;
    margin-left: 45px;
  }
  `;

export const Input = styled.input`
 font-size: 20px;
 padding: 10px;
 color: #7187C3; 
 margin-right: 6px;
 border: white;
 margin-bottom: 40px;
 border-radius: 10px;
 @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 10px;
    justify-content: center;
 }
  
  `;

export const SubmitInput = styled.input`
 font-size: 20px;
 padding: 10px;
 background-color: #DEFE7b;
 color: #7187C3; 
 margin-right: 4px;
 border: white;
 border-radius: 10px;
 cursor: pointer;
 transition: 0.3s ease;
 &:hover {
    color: #7187C3;
    background: #fff;
    border: 1px solid #fff;
  }
 @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 30px;
    margin-left: 60px;
    justify-content: center;
 }
  
  `;