import {Container} from '../styles/ContainerEd'
import logo from '../assets/logo-h.png'
import logoc from '../assets/logo-c.png'
import {BiCode, BiCodeAlt} from 'react-icons/bi'
import {VscLaw} from 'react-icons/vsc'
import {ImHammer2} from 'react-icons/im'


function Educacion() {
  return (
    <Container>
      <h1>Educacion</h1>
    <div>        
      < BiCode /> <h2>Full Stack Web Developer</h2> <BiCodeAlt />
        <h4>Henry</h4>
        <img
        src={logo}
        alt="Henry"
        width="60px"
        />
                <span>Sep 2022 - Feb 2023</span>
        <p>Etapa Boocamp- consistió en entrenamiento intensivo de +800 hrs. donde nos enseñaron las mas relevantes tecnologias y el lenguaje Javescript. </p>
        <p>Etapa Labs- Realizacion en equipo de proyectos del mundo real con metodologías y herramientas ágiles (scrum), bajo un aprendizaje colaborativo.</p>
    </div>
    <div>
      <ImHammer2 />  <h2>Lic. en Derecho</h2> <VscLaw />
        <h4>Centro de Estudios Universitarios Tierra Caliente</h4>
        <img
        src={logoc}
        alt="CEUTC"
        width="50px"
        /> <span>Sep 2015 - Oct 2019</span>
        <p>Conocimiento, bases e interpretacion de las leyes en las diversas ramas del Derecho existentes.</p>
    </div>
    </Container>
  );
}

export default Educacion ;