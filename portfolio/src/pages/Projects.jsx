import { Container } from "../styles/ContainerPro";
import { ProjectsConst } from "../components/ProjectsCo";


function Proyectos() {

    return ( 
        <Container>
        <h1>Proyectos</h1>

        {ProjectsConst.map(({name, techs, resume, git, deploy, video})=>(
            <div key={video} >
                <h3>{name}</h3>
                {
                    techs.map(({tech}, index)=>(
                        <div key={index} >{tech}</div>
                    ))
                }
                <div>{resume}</div>
                <p>{git}</p>

                <p>{deploy}</p>
                <div>
                <video src={video + '#t=1'} width='300px' controls ></video>
                </div>
            </div>
        ))}

        </Container>
    );
}




export default Proyectos;