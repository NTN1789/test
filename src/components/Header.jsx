import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql  } from 'gatsby';
import { Container,  Navigation, Slogan } from './styleHeader';
import { CreateGlobalStyle } from './styles/Global';

 export const MenuIcon = styled.button`
position:fixed;
top:2rem ;
right:2rem;
display:flex;
flex-direction:column;
justify-content:space-around;
width:1.5rem;
height:1.5rem;
background:transparent;
border:none;
cursor:pointer;
z-index: 5;

div{
  width:1.5rem;
  height:0.2rem;
  background:black;
  border-radius:5px;
  transform-origin:1px;
  position:relative;
}


`



export default function Header(){


  const data = useStaticQuery(graphql`
  query HeaderQuery{
    datoCmsHeader{
      about
      recipes
      subscribe 
      fundo{
        url
      }
      rc{
        url

      }
  
      
    }
  }


`)

const {recipes,about, subscribe, rc } = data.datoCmsHeader
return (

  <>
  <CreateGlobalStyle/>

  <MenuIcon>
    <div></div>
    <div></div>
    <div></div>
  </MenuIcon>
<Container>

<img src={rc.url} alt="" />


<Navigation>
  
<ul>

  <li>{recipes}</li>

  <li>{about}</li>

  <li>{subscribe}</li>
</ul>

</Navigation>





<Slogan> recipes</Slogan>

</Container>

  </>
)





}