import { Container } from "../styles/ContainerHome";
import me from '../assets/me.jpg';
import Contact from "../components/Contact";
import React, { useState } from "react";



function Home() {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   return ( 
      <Container >
         <div className="containerHome" >
            <div className="dates" >
               <h1 className="TitleH">¡Hola! Soy Lizhana Campos </h1>
               <p  className="pHome1" >Full Stack Developer || Lic. en Derecho.</p>
               <br />
               <h3> ¿como estas? es un gusto tenerte aquí.</h3>
               <br />
               <p>Te comparto que estoy en busqueda de mi primera oportunidad laboral IT, si te interesa mi perfil, tienes algun feedback o necesitas una charla, no dudes en contactarme. 🥰 </p>
               <div className="contachome" ><Contact/></div>
               
            </div>
            <div className="imgContentH" >
               <img src={me} alt="LizhanaPick" width='300px' />
            </div>
            
            </div>
      </Container>
   );
};



export default Home;