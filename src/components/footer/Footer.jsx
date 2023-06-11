import React from 'react'
import { useStaticQuery, graphql  } from 'gatsby';
import { CreateGlobalStyle } from '../styles/Global';
import { ContainerFooter } from './footerStyles';

export default  function Footer () {


  const data = useStaticQuery(graphql`
  query Footer {
    datoCmsFooter {
      facebook{
        url
      }
      instagram{
        url
      }
      pinterest{
        url
      }
      twitter{
        url
      }
    }
  }  
  
  `)


const {facebook,instagram,pinterest,twitter} = data.datoCmsFooter;
  return (
   <>
    <CreateGlobalStyle/>
    <ContainerFooter>

    <img src={facebook.url} alt="" />
    <img src={instagram.url} alt="" />
    <img src={pinterest.url} alt="" />
    <img src={twitter.url} alt="" />
 
    </ContainerFooter>

   
   
   </>
  )
}
