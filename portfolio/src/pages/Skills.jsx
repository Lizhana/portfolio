import { Container } from "../styles/ContainerSkills";
import { Tskills, Sskills } from "../components/SkillsCo"; 



function Skills() {
    
    return ( 
    <Container>
        <div>
        <h1>Habilidades</h1>
        <div>
            <h4>Habilidades blandas</h4>
            {Sskills.map(({soft})=>(
                <div>-{soft}</div>
            ))}

        </div>
        <br />
        <div>
            <h4>Habilidades tech</h4>
            {Tskills.map(({tech})=>(
                <div>{tech}</div>
            ))}
        </div>
        </div>
    </Container> );
}




export default Skills;