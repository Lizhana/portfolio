import styled from "styled-components";
import {v} from './variables'

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

min-height: 100vh;
background-image: url(${(props) => props.theme.bgtotal}) ;
background-size: 100%;
color: ${(props) => props.theme.texto};


.containerHome{  
        display: flex;
    .dates{
        padding:0.5rem;
        margin-top: 6rem; 
    .TitleH{
    font-family: 'Zeyada', cursive;
    font-size: ${(props)=> props.theme.fontxxxl};
  }
    .pHome1{
    font-size: ${(props)=> props.theme.fontxl}; 
    font-family: 'Lora', serif;
    
    }
    .contachome{
      margin-top: 45px ;
    }
}
.imgContentH {
  margin-top: 4rem;

*{
  box-sizing: border-box;
  border: 8px dotted #fa709a;
}
  
  img {
    border-radius:50%;
  }

}

@media (max-width: 900px) {
  flex-wrap: wrap;
}



`;