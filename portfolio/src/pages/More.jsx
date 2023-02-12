import Contact from "../components/Contact";
import { Container } from "../styles/ContainerMore";
import me2 from '../assets/me.png'

function More() {
    return ( 
        <Container>
        <div  className="ContainerMore" >
            
            <div className="DivInfo">
<h1>Un poco más...</h1>

       <p>  Si estás acá es porque te interesa saber un poco más acerca de mí, toma tu café, té o matecito que esto será una corta, pero sincera conversación, permíteme platicarte que soy una mujer Mexicana, a punto de entrar al tercer escalón. Actualmente vivo en Chile, soy abogada y me gusta mi profesión, ergo al salir de mi país, con el apoyo de mi pareja, me adentre por primera vez a un mundo que aun siendo desconocido me apasionaba y del cual me enamoro cada día más, la programación; debo confesar que no ha sido sencillo, que he pasado por estrés, frustración y llanto, pero he aquí otras de las características que me definen y más me gustan de mí, soy chingona y no me rindo, soy de la firme idea de que todos podemos aprender lo que nos propongamos a nuestra propia forma y ritmo. En lo personal, me considero amable, amigable, pero sobre todo respetuosa, me gusta la música, la lectura, la fiesta, la comida, el café, los animales y amo a mi familia. ¿Y tú, qué me platicas?.</p>
        </div>
        

        <div className="ImgInf" >
           <img src={me2} alt="Lizhana" width='150px' /> 
        </div>
        
            </div>
            <br />
            <div className="Contactme" >
<Contact/>
</div >
        </Container>
    );
} 

export default More;