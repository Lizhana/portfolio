import styled from "styled-components";

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

min-height: 100vh;
background-image: url(${(props)=>props.theme.bgtotal}) ;
background-size: 100%;
color: ${(props) => props.theme.texto};

.ContainerEx{
    padding-top: 0.8rem;
    .TitleEx{
        margin-left:35%;
        font-family: 'Zeyada', cursive;
        font-size: ${(props)=> props.theme.fontxxl};
    }
    .datesEx{
        padding-top: 0.5rem;
        margin-left:35px;
        margin-right:35px;


        .TitleE3{
            font-family: 'Lora', serif;

            font-size: ${(props)=> props.theme.fontxl};
        }

        .SpanE{
                font-size: ${(props)=> props.theme.fontmd};
            }

            .SpanB{
                font-size: ${(props)=> props.theme.fontxs};
            }

        .DivSubEx{
            border: 1px solid #ca1948;
            
            p{
                font-size: ${(props)=> props.theme.fontsm};
                text-align: justify;
            }
        }
        
    }
}


@media (max-width: 900px) {
    flex-wrap: wrap;
}


`;