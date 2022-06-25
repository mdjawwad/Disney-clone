import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styledComponents from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
     let tempMovies = snapshot.docs.map((doc)=>{
       return { id: doc.id, ...doc.data}
      })
      dispatch(setMovies(tempMovies))
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styledComponents.main`
min-height: calc(100vh - 70px);
padding : 0 calc(3.2vw + 5px);
position: relative;
overflow-x: hidden;


&:before{
  content:"";
  background: url(/images/home-background.png) center center / cover no-repeat fixed;

  position: absolute;
         left:0;
         right: 0;
         bottom: 0;
         top: 0;
         z-index: -1;
}

`;
