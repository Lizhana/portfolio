import { BrowserRouter, Routes, Route } from "react-router-dom";
import Educacion from "../pages/Educacion";
import Experiencia from "../pages/Experience";
import Home from "../pages/Home";
import Proyectos from "../pages/Projects";
import Skills from "../pages/Skills";
import More from "../pages/More";


export function MyRoutes() {
  return (
   
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/educacion" element={<Educacion/>} />
        <Route path="/experiencia" element={<Experiencia/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/algomas" element={<More/>}/>
      </Routes>
   
  );
}
