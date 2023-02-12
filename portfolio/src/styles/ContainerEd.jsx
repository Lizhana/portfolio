import styled from "styled-components";

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');

min-height: 100vh;
background-image: url(${(props) => props.theme.bgtotal}) ;
background-size: 100%;
color: ${(props) => props.theme.texto};

.ContainerEd{ 

.datesEd{
    padding-top: 1rem;
    margin-left:25px;

    .TitleEd{
        margin-left:40%;
        font-family: 'Zeyada', cursive;
    font-size: ${(props)=> props.theme.fontxxl};
    @media (max-width: 900px)  {
       margin-left: 20%;
       }
        }
        h2{
            font-family: 'Lora', serif;
            font-size: ${(props)=> props.theme.fontxl};

        }
        
    } 

    .DivSub{
        margin-right: 10px;
        border: 1px solid #ca1948;
    }

}


@media (max-width: 900px) {
    flex-wrap: wrap;
}




`;