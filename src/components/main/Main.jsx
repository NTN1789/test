import React from 'react'
import { useStaticQuery, graphql  } from 'gatsby';
import { Box,  ContainerMain, Imagens, Latest, ProductCard } from "./mainstyle"
import { CreateGlobalStyle } from '../styles/Global';


export default function Main ()  {
    const data = useStaticQuery(graphql`
    query MainQuery{
    datoCmsMain{
        bolo{
            url
        }
        pizza{
            url
        }
        vitamina{
            url
        }
    }

    }
    
    
    
    
    `)



const {bolo, pizza, vitamina} = data.datoCmsMain
  return (
    <>
       <CreateGlobalStyle/>
      <ContainerMain>

<Latest>Latest Recipes</Latest>
    <Box>
<ProductCard>
        <Imagens src={bolo.url} />

        <p>Red Velvet Cake</p>
        </ProductCard>

        <ProductCard>
        <Imagens src={pizza.url} />
            <p>Margherita Pizza</p>
        </ProductCard>
       
        <ProductCard> 

        <Imagens src={vitamina.url} />
        <p>Peanut Smoothie</p>
        </ProductCard>


        
 
    </Box>
      </ContainerMain>
        
        </>
  )
}
