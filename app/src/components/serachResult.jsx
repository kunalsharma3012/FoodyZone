import styled from "styled-components";
import { BASE_URL } from "../App";
import { Button } from "../App";
import { Container } from "../App";
import "../App.css"

const SearchResult = ({Data: foods}) =>{
    return(
        <FoodCardsContainer>
          <Container>
        <FoodCards>
         
         { foods?.map((food) =>( 
             <FoodCard key = {food.name}>
          <div className="food_image">
            <img src={BASE_URL + food.image} alt="food_image" />
          </div>
          <div className="food_info">
          <div className="info">
            <h3>{food.name}</h3>
            <p>{food.text}</p>
          </div>
          <Button>${food.price.toFixed(2)}</Button>
          </div>
             </FoodCard>
          ))}
         
        </FoodCards>
        </Container>
      </FoodCardsContainer>
    )
} 

const FoodCardsContainer = styled.section`
min-height: calc(100vh - 210px);
background-image:url('/bg.png');
background-size:cover;

`;

const FoodCards = styled.div `
display:flex;
flex-wrap:wrap;

flex-direction:row;
row-gap:32px;
column-gap:20px;
justify-content:center;
align-items:center;
padding:80px;
`;

const FoodCard = styled.div`
height:167px;
width: 340px;
display:flex;

border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border:1px solid white;

border-radius:20px;
padding:10px;

.food_info{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:end;
}
h3{
    font-weight:500;
    font-size:16px;
    margin-top:8px;
}
p{
    font-size:12px;
}


`;



export default SearchResult;