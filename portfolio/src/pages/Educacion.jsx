import {Container} from '../styles/ContainerEd'
import logo from '../assets/logo-h.png'
import logoc from '../assets/logo-c.png'
import {BiCode, BiCodeAlt} from 'react-icons/bi'
import {VscLaw} from 'react-icons/vsc'
import {ImHammer2} from 'react-icons/im'


function Educacion() {
  return (
    <Container>
     
    <div className='ContainerEd' >  
    <div className='datesEd' > 
          <h1 className='TitleEd' >Educacion</h1>  
       <h2>Full Stack Web Developer</h2> < BiCode /><BiCodeAlt />
        <h4>Henry</h4>
                <p>Sep 2022 - Feb 2023</p>
          <div className='DivSub' >
        <p>Etapa Boocamp- consistió en entrenamiento intensivo de +800 hrs. donde nos enseñaron las mas relevantes tecnologias y el lenguaje Javescript. </p>
        <p>Etapa Labs- Realizacion en equipo de proyectos del mundo real con metodologías y herramientas ágiles (scrum), bajo un aprendizaje colaborativo.</p>
        </div>
        <br />
          <h2>Lic. en Derecho</h2><ImHammer2 /> <VscLaw />
        <h4>Centro de Estudios Universitarios Tierra Caliente</h4>

        <p>Sep 2015 - Oct 2019</p>
        <div className='DivSub' >
        <p>Conocimiento, bases e interpretacion de las leyes, derechos, obligaciones, jurisprudencias, etc. del Derecho existentes.
        </p>
        <p>Talleres de: Derechos de las minorias, Derechos sexuales, Teorias y ramas del Feminismo </p>
    </div>
    </div>
  
      
    </div>
    </Container>
  );
}

export default Educacion ;