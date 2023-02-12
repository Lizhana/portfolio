import styled from "styled-components";

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

min-height: 100vh;
background-image: url(${(props) => props.theme.bgtotal}) ;
background-size: 100%;
color: ${(props) => props.theme.texto};

.ContainerPr{
    padding: 1rem;
    .TitlePr{
    margin-left:40%;
    font-family: 'Zeyada', cursive;
    font-size: ${(props)=> props.theme.fontxxl};
    }


    .DivContP{
        padding: 2px;
        

        .ContentSec{
            display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-gap: 1rem;
        margin-bottom: 1rem;

            .VideoPr{
                overflow: hidden;
                .VideoT{
                    width: 100%;
                    display: block;
                    -o-object-fit: cover;
                    object-fit: cover;
                }

            }

            .DivResPr{
                padding: 1rem 0;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: flex-start;


                h3{
                font-family: 'Lora', serif;
                font-size: ${(props)=> props.theme.fontxl}; 
                }
                p{
                    font-size: 0.7rem;
    max-width: 60rem;
    line-height: 1.7;
    margin-bottom: 3rem;
                }


            .TechPro{
                justify-content: space-between;
                background: pink;
                svg{
                    font-size:40px;
                    color: ${(props) => props.theme.texto};
                }
            }

            }

            
            
        }

    }

}



`;