import { v } from "./variables";
import styled from "styled-components";


export const Container = styled.div`

color: ${(props) => props.theme.texto};
background: ${(props) => props.theme.bg};
position: sticky;
padding-top: 10%;


.SidebarButton {
  position: absolute;
  top: ${v.xxlSpacing};
  right: -18px;
  width: 32px;
  height: 32px;
  border-radius: 25%;
  background: ${({ themeUse }) =>themeUse === "light" ? v.lightbackground : v.lightbackground} ;
  box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg3};
  align-items: center;
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
  align-items: center;
  padding-bottom: ${v.xlSpacing};


  .imgcontent {
    display: flex;
    margin-top: 5%;
    img {
      max-width: 100%;
      height: auto;
    }
  transition: all 0.3s;
  transform: ${({ isOpen }) => (isOpen ? `scale(1)` : `scale(1.5)`)};
  }
  .miL {
    display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    transition: all 0.3s;
    white-space: nowrap;
    overflow: hidden;
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
    color:  ${(props) => props.theme.texto};
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

.LinkContainersec {
  margin: 8px 0;
  padding: 0 15%;

  :hover {
    background: ${(props) => props.theme.bg3};    

    }
  .Linksec {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: calc(${v.mdSpacing}-2px) 0;
    color: ${(props) => props.theme.texto};

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
  margin-top:30px;
  display: flex;
  align-items:center;
  justify-content: space-between;

  .TitleTheme{
    display:block;
    padding:10px;
    font-weight:700;
    opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
    transition: all 0.3s;
    white-space:nowrap;
    overflow: hidden;
  }
    span{
      display:block;
      padding: 5px;
      font-weight: 700;
    }
  .ToggleContent{
    margin: ${({ isOpen }) => (isOpen ? ` auto 70px` : ` auto 15px`)};
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
        
      margin-left: ${({ isOpen }) => (isOpen ? `100%` : `0px`)};
        
      .switch{
        position: relative;
        display: block;
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
          background:${({ themeUse }) =>themeUse === "light" ? v.lightcheckbox : v.checkbox};
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



@media (max-width: 900px) {

}

`;
