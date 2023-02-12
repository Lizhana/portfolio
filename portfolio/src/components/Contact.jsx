import styled from "styled-components";
import {AiFillGithub, AiFillTwitterCircle}from 'react-icons/ai';
 import {v} from '../styles/variables'

function Contact() {
    return (
<Container  >
<div className="Contactme" >
            <div>
               <a href="mailto:lizhanita@gmail.com" target='_blank'  ><img src='https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png' alt="" width='50px'  /></a>
            </div>
            <div>
               <a href="https://www.linkedin.com/in/lizhana-campos/" target='_blank' ><img src='https://ecoven.cl/wp-content/uploads/2019/02/Linkedin-s%C3%ADmbolo.png' alt="" width='50px' /></a>
            </div>
            <div>
               <a href="https://calendly.com/lizhana/30min" target='_blank' ><img src='https://logos-world.net/wp-content/uploads/2021/06/Calendly-New-Logo.png' alt="" width='50px' /></a>
            </div>
            <div className="svgfont" >
               <a href="https://github.com/Lizhana" target='_blank' ><AiFillGithub  /></a>
            </div>
            <div>
               <a href="https://twitter.com/CamposLizhana" target='_blank' ><AiFillTwitterCircle color="#1bb2e8" /></a>
            </div>
            </div>

</Container>
      );
}

const Container = styled.div`
.Contactme{

   display:flex;
   justify-content: space-between;

   svg{
      font-size:30px;
      color: ${(props) => props.theme.texto};

   }
}

`

export default Contact;