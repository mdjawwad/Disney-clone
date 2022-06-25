import React from "react";
import { useSelector } from "react-redux";
import styledComponents from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";

function Movies() {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommended Movies</h4>
      <Contain>
        {movies &&
          movies.map((movie) => (
            <Wrap>
              <img src={movie.cardImg} alt="" />
            </Wrap>
          ))}
      </Contain>
    </Container>
  );
}

export default Movies;

const Container = styledComponents.div`

`;

const Contain = styledComponents.div`

display : grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
margin-bottom: 1rem;
`;

const Wrap = styledComponents.div`
border-radius: 10px;
cursor: pointer;

overflow: hidden;
border: 3px solid rgba(294, 294, 294, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
transition: all  250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}

`;
