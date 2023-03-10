import { Container} from '../styles/ContainerHome'
import {BiCode, BiCodeAlt} from 'react-icons/bi'
import {VscLaw} from 'react-icons/vsc'
import {ImHammer2} from 'react-icons/im'


function Educacion() {
  return (
    <Container>
     
    <div className='containerHome' >  
    
    <div className='dates' > 
          <h1 className='TitleH' >Educacion</h1>  
       <h2 >Full Stack Web Developer</h2> < BiCode /><BiCodeAlt />
        <h4>Henry</h4>
                <p>Sep 2022 - Feb 2023</p>
          <div className='.pHome1' >
        <p>Etapa Bootcamp- consistió en entrenamiento intensivo de +800 h, donde nos enseñaron las más relevantes tecnologías y el lenguaje JavaScript. </p>
        <p>Etapa Labs- Realización en equipo de proyectos del mundo real con metodologías y herramientas ágiles (scrum), bajo un aprendizaje colaborativo.</p>
        </div>
        <br />
          <h2  >Lic. en Derecho</h2><ImHammer2 /> <VscLaw />
        <h4>Centro de Estudios Universitarios Tierra Caliente</h4>

        <p>Sep 2015 - Oct 2019</p>
        <div className='.pHome1' >
        <p>Conocimiento, bases e interpretación de las leyes, derechos, obligaciones, jurisprudencias, etc. del Derecho.
        </p>
        <p>Talleres de: Defensa de las minorías, Derechos sexuales, Teorías y ramas del Feminismo. </p>
    </div>
    </div>
    </div>
    </Container>
  );
}

export default Educacion ;