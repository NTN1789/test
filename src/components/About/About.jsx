import React from 'react'
import *as S from "./aboutStyles"
import Colher from "../../images/colher.png"
import { CreateGlobalStyle } from '../styles/Global'

const About = () => {
  return (
    <>
   

<CreateGlobalStyle/>

<S.SecondSection>
     <figure>

         <S.ImageSecondSection src={Colher} alt="" />
     <S.Sobre>ABOUT</S.Sobre>
     </figure>
      
     <div>
         <span></span>
         <p>Quisque ut tellus urna. Phasellus ipsum sapien, porttitor ut feugiat quis, faucibus id arcu. Cras ultrices erat ac mi facilisis tristique. In finibus nisi mauris, ornare venenatis augue condimentum lobortis. Nullam nec sapien sit amet odio ultricies accumsan ut vitae eros. Fusce pellentesque sed justo nec sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ipsum eget mi vehicula sollicitudin eu eu ipsum. Duis varius neque purus, gravida viverra nulla porttitor ac. Fusce eleifend eu velit ac mattis. Fusce eget lectus tortor. Ut vel nibh et tortor maximus laoreet.
             Integer ante sapien, porttitor in aliquet sit amet, congue sed augue. Nunc a tincidunt sapien. In at tempus nisl. Sed ultricies at nibh sed elementum. Integer convallis urna magna, quis eleifend ligula pulvinar vel.</p>
     </div>
 </S.SecondSection>

 <S.FormBox>

<S.Subscribe>SUBSCRIBE</S.Subscribe>
<S.Newsletter>Sign up for newsletter</S.Newsletter>
<S.Input placeholder="Your Email"></S.Input>
<S.Botao>SUBMIT</S.Botao>
</S.FormBox>
    
    
    </>
  )
}

export default About