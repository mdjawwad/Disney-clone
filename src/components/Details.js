import React from "react";
import styledComponents from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img
    src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1522857225185-WU21FXC1RWP4YNJM0WZM/bao_right.jpg?format=1500w"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/pp_tangled_logo_20509_70fd6067.png"
          alt=""
        />
      </ImageTitle>

      <Controls>
        <PlayBtn>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayBtn>
        <TrailarBtn>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailarBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchBtn>
      </Controls>
      <SubTitle>2018 . 7m . Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        In “Bao,” an aging Chinese mom suffering from empty nest syndrome gets
        another chance at motherhood when one of her dumplings springs to life
        as a lively, giggly dumpling boy. Mom excitedly welcomes this new bundle
        of joy into her life, but Dumpling starts growing up fast, and Mom must
        come to the bittersweet revelation that nothing stays cute and small
        forever.
      </Description>
    </Container>
  );
}

export default Details;

const Container = styledComponents.div`
min-height: calc(100vh - 70px);
padding : 0 calc(3.5vw + 5px);
position: relative;

}

`;
const Background = styledComponents.div`
position: fixed;

left:0;
right: 0;
bottom: 0;
top:0;
z-index: -1;
opacity: 0.8; 


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

const ImageTitle = styledComponents.div`

height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;

img{
    width: 100%;
    height: 100%;
    object-fit: conatain;
}
`;

const Controls = styledComponents.div`
display: flex;
align-items:center;
margin-top: 1rem; 
`;
const PlayBtn = styledComponents.button`
border-radius:4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249,249,249);
border: none;
letter-spacing: 1.8px; 
cursor: pointer;

&:hover{
  background: rgb(198, 198,198);
}

`;
const TrailarBtn = styledComponents(PlayBtn)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb( 249,249, 249);
color: rgb(249,249, 249);

`;

const AddBtn = styledComponents.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius:50%;
border 2px solid white;
background-color: rgba(0,0,0,0.6);
cursor: pointer;

span{
  font-size: 30px;
  color: white;
}

`;
const GroupWatchBtn = styledComponents(AddBtn)`

background: rgb(0,0,0);
`;

const SubTitle = styledComponents.div`
font-size: 15px;
min-height: 20px;
color: rgb(249,249,249);

margin-top: 26px;

`;
const Description = styledComponents.div`
font-size: 15px;
line-height: 1.4;
margin-top: 16px;
color: rgb(249,249,249);
max-width: 760px;
`;
