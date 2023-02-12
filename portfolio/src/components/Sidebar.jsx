import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BiHomeHeart, BiRocket } from "react-icons/bi";
import {RiHeartAddLine} from 'react-icons/ri'
import { FaUserGraduate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import {HiOutlineDocumentDownload} from 'react-icons/hi'
import rain from "../assets/rain.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { Container } from "../styles/ContainerSide";
import curriculum from '../Curriculum.pdf'

function Sidebar({ setSidebarOpen, sidebarOpen }) {
  const handleClick = (e) => {
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  };
  const { setTheme, theme } = useContext(ThemeContext);
  const cambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <button className="SidebarButton" onClick={handleClick}>
        <AiOutlineDoubleLeft />
      </button>
      <div className="logocontent">
        <div className="imgcontent">
          <img src={rain} width="35px" />
        </div>
        <h2 className="miL" > Sobre mí</h2>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
            <div className="LinkIcon">{icon}</div>
            {sidebarOpen && <span className="a">{label}</span>}
          </NavLink>
        </div>
      ))} 
      <div className="LinkContainersec" >
          <a
          className="Linksec"
          href={curriculum} download >
            <div className="LinkIcon"> < HiOutlineDocumentDownload /></div>
            {sidebarOpen && <span className="a">Curriculum</span>}
          </a>
        </div>
      <div className="ThemeContent">
        <div className="ToggleContent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch">
                  <input
                    type="checkbox"
                    className="theme-swither"
                    onClick={cambiarTheme}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </Container>
  );
}

//Routes List ------------------>>
const linksArray = [
  {
    label: "Inicio",
    icon: <BiHomeHeart />,
    to: "/",
  },
  {
    label: "Educación",
    icon: <FaUserGraduate />,
    to: "/educacion",
  },
  {
    label: "Experiencia",
    icon: <BiRocket />,
    to: "/experiencia",
  },
  {
    label: "Habilidades",
    icon: <GiSkills />,
    to: "/skills",
  },
  {
    label: "Proyectos",
    icon: <GoProject />,
    to: "/proyectos",
  },
  {
    label: "...Más",
    icon: <RiHeartAddLine />,
    to:'algomas',
  },
];

export default Sidebar;
