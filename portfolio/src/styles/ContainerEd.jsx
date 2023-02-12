import styled from "styled-components";

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

min-height: 100vh;
background-image: url(${(props) => props.theme.bgtotal}) ;
background-size: 100%;
color: ${(props) => props.theme.texto};

    .ContainerEd{
        display: flex;
        margin-left: 30px;
        .datesEd{
            padding: 0.5rem;
            margin-top: 2rem;
            .TitleEd{
                font-family: 'Zeyada', cursive;
                font-size: ${(props)=> props.theme.fontxxxl};
                margin-left:25%
            }
            h2{
                font-size: ${(props)=> props.theme.fontxl}; 
    font-family: 'Lora', serif;
            }
            .DivSub{

            }
        }
    }



`;