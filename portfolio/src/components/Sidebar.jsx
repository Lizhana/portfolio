import styled from "styled-components";
import { v } from "../styles/variables";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BiHomeHeart, BiRocket } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import rain from "../assets/rain.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

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
    <Container isOpen={sidebarOpen} themeUse={theme} >
      <button className="SidebarButton" onClick={handleClick}>
        <AiOutlineDoubleLeft />
      </button>

      <div className="logocontent">
        <div className="imgcontent">
          <img src={rain} width="35px" />
        </div>
        <h2> Yo</h2>
      </div>

      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="LinkIcon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <hr />
      <br />
      <div className="ThemeContent">
        {sidebarOpen && <span className="TitleTheme" >Modo oscuro</span>}
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
      <hr />
    </Container>
  );
}

//Array List ------------------>>
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
];

//Styled ------------------------>>
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 20px;

  .SidebarButton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 25%;
    background: ${({themeUse})=>(themeUse === 'light'? v.lightbackground : v.lightbackground)} ;
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg3};
     //display: flex;
    aling-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    letter-spacing: inherit;
    font-family: inherit;
    outline: none;
  }

  .logocontent {
    display: flex;
    justify-content: center;
    aling-items: center;
    padding-bottom: ${v.lgSpacing};

    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
        margin: 2px;
      }
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(1)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.mdSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
      .LinkIcon{
      padding: ${v.smSpacing} ${v.mdSpacing} ;
      display: flex;
        svg{
          font-size: 25px;
        }
      }
      &.active{
        .LinkIcon{
            svg{
              color: ${(props) => props.theme.bg4};
            }
          }
      }
    }
  }
  .ThemeContent{
    display: flex;
    aling-items:center;
    justify-content: space-between;

    .TitleTheme{
       display:block;
       padding:10px;
       font-weight:700;
       opacity: ${({isOpen})=>(isOpen? `1`: `0`)};
       transition: all 0.3s;
       white-space:nowrap;
       overflow: hidden;
    }
      span{
        display:block;
        padding: 10px;
        font-weight: 700;
      }
    .ToggleContent{
      margin: ${({ isOpen }) => (isOpen ? ` auto 40px` : ` auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position; relative; 
      .theme-container{
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
          .grid{ 
            display: grid;
            justify-items: center;
            align-content: center;
            height: 100vh;
            width: 100vw;
            font-family: 'Lato', sans-serif;
        }
        .demo{
          font-size: 32px;  
          
        .switch{
          position: relative;
          display: inline-block;
          width: 60px;
          height: 30px;
          
        
          .theme-swither{
            opacity:0;
            width:0px;
            height:0px;
            &:checked + .slider:before{
              left: 25px;
              content: '🌙';
              transform: traslatex(26px);
            }
        
          }
          .slider{
            position: absolute;
            cursor: pointer;
            top: 0;
left: 0;
right: 0;
bottom: 0;
background:${({themeUse})=>(themeUse === 'light'? v.lightcheckbox : v.checkbox)};
transition: 0.4s;
&::before{
position: absolute;
content:'☀️';
height: 0px;
width: 0px;
left: -10px;
top: 16px;
line-height: 0px;
transition: 0.4s;
}
 &.round{
  border-radius: 34px;
  &::before{
    border-radius: 50%
  }
 }        
 }
        }
        }

      }
    }
  }
`;
//<<-----------------

export default Sidebar;
