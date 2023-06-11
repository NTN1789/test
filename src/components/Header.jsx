import React from 'react';

import { useStaticQuery, graphql  } from 'gatsby';
import { Container,    Navigation, Slogan } from './styleHeader';
import { CreateGlobalStyle } from './styles/Global';




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