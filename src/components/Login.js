import React from "react";
import styledComponents from "styled-components";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <Signup>GET ALL THERE</Signup>
        <Description>
          STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styledComponents.main`

min-height: calc(100vh - 70px);
position: relative;
display: flex;
align-items: top;
justify-content: center;
overflow-x: hidden;


&:before{
  content:"";
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(/images/login-background.jpg);

  position: absolute;
         left:0;
         right: 0;
         bottom: 0;
         top: 0;
         z-index: -1;
         opacity: 0.7;
}
`;

const CTA = styledComponents.div`
width: 90%;
max-width: 650px;
display: flex;
align-items: center;
// margin-top: 100px;
flex-direction: column;
padding: 80px 40px;

`;
const CTALogoOne = styledComponents.img``;
const CTALogoTwo = styledComponents.img`
width: 90%;
`;

const Signup = styledComponents.a`
width: 100%;
font-weight: bold;
background-color: #0063e5;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover{
    background: #0483ee;
}


`;

const Description = styledComponents.p`
font-size: 11px;
letter-spacing: 1.5xpx;
text-align: center;
line-height: 1.5;

`;

