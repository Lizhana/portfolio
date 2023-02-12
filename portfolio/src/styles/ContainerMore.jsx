import styled from "styled-components";

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

min-height: 100vh;
background-image: url(${(props) => props.theme.bgtotal}) ;
background-size: 100%;
color: ${(props) => props.theme.texto};
padding: 20px 10%;

    .ContainerMore{
        display: flex;
        

       

        .DivInfo{
 h1{
            margin-left:40%;
            font-family: 'Zeyada', cursive;
            font-size: ${(props)=> props.theme.fontxxl};
        }
        p{
            margin-top: 20px;
            margin-right:20px;
            font-size: ${(props)=> props.theme.fontlg}; 
            font-family: 'Lora', serif;
            text-align: justify;
            }
        }

        .ImgInf{
            margin-top: 5.5rem;
        
            img{
                border-radius: 10%;
            }
        
        }
    }
    
@media (max-width: 900px) .ContainerMore {
    flex-wrap: wrap;
  }

`;