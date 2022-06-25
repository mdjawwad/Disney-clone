import React from 'react'
import styledComponents from 'styled-components'

function Viewers() {
  return (
    <Container>
<Wrap>
  <img src="/images/viewers-disney.png" alt="viewer" />
</Wrap>
<Wrap>
  <img src="/images/viewers-marvel.png" alt="viewer" />
</Wrap>
<Wrap>
  <img src="/images/viewers-national.png" alt="viewer" />
</Wrap>
<Wrap>
  <img src="/images/viewers-pixar.png" alt="viewer" />
</Wrap>
<Wrap>
  <img src="/images/viewers-starwars.png" alt="viewer" />
</Wrap>

    </Container>
  )
}

export default Viewers


const Container = styledComponents.div`
margin-top: 30px;
display: grid;
grid-gap: 25px;
padding: 30px 0 26px;
grid-template-columns: repeat(5, minmax(0,1fr))
`

const  Wrap = styledComponents.div`
border-radius: 10px;
border: 3px solid rgba(249, 249,249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

      cursor: pointer;
      transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

&:hover {
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
transform: scale(1.05);
border-color: rgba(249, 249,249, 0.8);
}

`