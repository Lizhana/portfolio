import styled from "styled-components";

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

min-height: 100vh;
background-image: url(${(props) => props.theme.bgtotal}) ;
background-size: 100%;
color: ${(props) => props.theme.texto};

.SkillsCont{
  padding-top: 5%;
  @media (max-width: 900px)  {
    margin-left: 10%;
   }

  .datesSk{
    
    padding:1rem;
    margin-left: 20%;

        .TitleSk{        
    margin-left:20%;
    font-family: 'Zeyada', cursive;
    font-size: ${(props)=> props.theme.fontxxl};
    }
    .Softs{
      margin-top:20px;
      display: grid;
        grid-template-columns: 300px 200px 200px;
      .Soft2{

        
      }

    }

    .Title4S{
      font-family: 'Lora', serif;
    font-size: 1.70rem;
    }

    .Techs{
      margin-top:40px;
      display: grid;
        grid-template-columns: 300px 200px 200px;
        svg{
          font-size:30px;
          color=${(props)=> props.theme.texto}
        }
    }
  } 
}


@media (max-width: 900px) {
  .SkillsCont{
    display: flex;

    .datesSk{

padding:0;
margin-left:0;
  
          .TitleSk{        
            margin:0;
      font-family: 'Zeyada', cursive;
      font-size: ${(props)=> props.theme.fontxxl};
      }
      .Softs{
          
          display: inline;
        .Soft2{
  
          
        }
  
      }
  
      .Title4S{
        font-family: 'Lora', serif;
      font-size: 1rem;
      }
  
      .Techs{
        display: inline;
          svg{
            font-size:30px;
            color=${(props)=> props.theme.texto}
          }
      }
    } 
  }


}

`;