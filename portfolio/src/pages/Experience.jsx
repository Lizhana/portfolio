import { Container } from "../styles/ContainerEx";
import { ExpArray } from "../components/ExperienceCo";


function Experiencia() {
    return (
    <Container>
      <div className="ContainerEx" >
      <h1 className="TitleEx" >Experiencia</h1>
      {
        ExpArray.map(({cargo, lug, fech, objetivo, tareas, icon})=> (
          <div className="datesEx" >
            <h3 className="TitleE3" >{cargo}</h3> <label>{icon}</label>
            <span className="SpanE" >{lug}</span>
            <span className="SpanB" >{fech}</span>
            <div className="DivSubEx" >
            <p>{objetivo}</p>
            <p>{tareas}</p>
            </div>
          </div>
        ))
      }
      </div>
    </Container>
  );
}



export default Experiencia;
