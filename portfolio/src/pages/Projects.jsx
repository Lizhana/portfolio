import { Container } from "../styles/ContainerPro";
import { ProjectsConst } from "../components/ProjectsCo";


function Proyectos() {

    return ( 
        <Container>
            <div className="ContainerPr" >               
        <h1 className="TitlePr" >Proyectos</h1>

        {ProjectsConst.map(({name, techs, resume, git, deploy, video})=>(
            <div className="DivContP"  key={video} >

                <div className='ContentSec' >
                    <div className="VideoPr">
                <video src={video } width='300px' controls className='VideoT' ></video>
                <a href={git}  >{git}</a>
                <a href={deploy}  >{deploy}</a>

                {
                    techs.map(({tech}, index)=>(
                        <span key={index} className='TechPro' >{tech}</span>
                    ))
                }
                </div>
                <div className="DivResPr" >
                <h3>{name}</h3>
                <p>{resume}</p> 
                
                </div>
                </div>  
            </div>
        ))}

</div>
        </Container>
    );
}




export default Proyectos;