import { Container } from "../styles/ContainerHome";
import me from '../assets/me.png'


function Home() {
   return ( 
      <Container>
         <section>
            <div>
               <h1>¡Hola! Soy Lizhana Campos</h1>
               <p>Full Stack Developer || Lic. en Derecho.</p>
               <h3> ¿como estas? es un gusto tenerte aquí.</h3>
               
               <p>Te comparto que estoy en busqueda de mi primera oportunidad laboral IT, si te interesa mi perfil, tienes algun feedback o necesitas una charla, no dudes en contactarme. 🥰 </p>
            </div>
            <div>
               <img src={me} alt="LizhanaPick" width='200px' />
            </div>
         </section>
      </Container>
   );
};



export default Home;