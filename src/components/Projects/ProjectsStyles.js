import styled from 'styled-components';

export const Img = styled.img`
  width: 400px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height:275px;
  object-fit: cover;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 650px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  //letter-spacing: 2px;
  color: #7187C3;
  padding: 2rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;
1
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #Defe7b;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
font-family: 'Hind', sans-serif;
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  margin: 1rem 0 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#fff;
font-family: 'Hind', serif;
font-size: 1.6rem;
margin: 0 10px;
padding: 2rem 4rem;
box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};
border-radius: 15px;
transition: 0.5s;
background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
opacity: ${({ disabled }) => disabled ? '.5' : '1'};
transition: .4s ease;
&:hover{
  color: #Defe7b;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #Defe7b;;
font-size: 1.5rem;
`