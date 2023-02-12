import { Container } from "../styles/ContainerSkills";
import { Tskills, Sskills } from "../components/SkillsCo"; 
import {GiUbisoftSun} from 'react-icons/gi'



function Skills() {
    
    return ( 
    <Container>
        <div className="SkillsCont" >
            <div className="datesSk" >
        <h1 className="TitleSk" >Habilidades</h1>
         <h4 className="Title4S" >Habilidades blandas</h4>
        <div className="Softs" >
           
            {Sskills.map(({soft})=>(
                <div className="Soft2"  ><GiUbisoftSun fontSize='10px' />{soft}</div>
            ))}

        </div>
        <br />
        <h4 className="Title4S" >Habilidades tech</h4>
        <div className="Techs" >
            
            {Tskills.map(({tech, name})=>(

                <div>{tech}</div>
                
            ))}
        </div>
        </div>
        </div>
    </Container> );
}




export default Skills;