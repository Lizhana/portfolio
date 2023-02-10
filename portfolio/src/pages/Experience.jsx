import { Container } from "../styles/ContainerEx";
import { ExpArray } from "../components/ExperienceCo";


function Experiencia() {
    return (
    <Container>
      <div>
      <h1>Experiencia</h1>
      {
        ExpArray.map(({cargo, lugFech, objetivo, tareas, icon})=> (
          <div>
            <h3>{cargo}</h3> <div>{icon}</div>
            <span>{lugFech}</span>
            <p>{objetivo}</p>
            <p>{tareas}</p>
          </div>
        ))
      }
      </div>
    </Container>
  );
}



export default Experiencia;
