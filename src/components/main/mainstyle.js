import styled from "styled-components";



export const ContainerMain = styled.main`
padding-top:10%;
width:100%;
height: 72vw;
background-color:#F2F4F1 ;
flex-wrap:wrap;

`


export const Box = styled.div` 
display:flex;
justify-content:space-evenly;
align-items:center;
height:70vh;


`

export const Product = styled.section `
     position: relative;
    top: 28vh;
    display: flex;
    justify-content: space-evenly;
    padding:10px 10px;
    overflow:hidden;
    width: 100%;
    height: 100vh;

 



`

export const ProductCard = styled.figure `
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
width: 25vw;
height: 70vh;
background-color: #ffff;
box-shadow:  0px  4px  5px   grey;


p{
  display: flex;
  justify-content:center;
  align-items: center;
  height:25vh;
 
  text-align: center;
  font-size:2.5rem
}

`




export const Imagens = styled.img`

width:50vh;



`



export const Latest = styled.p`

font-size:2.5rem;
text-align:center;
text-transform:uppercase;

height:12rem;

`