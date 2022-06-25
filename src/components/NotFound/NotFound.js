import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import "./_notFound.css";
function NotFound() {
  return (
    <div className="Container">
      <h1>404</h1>
      <div class="cloak__wrapper">
        <div class="cloak__container">
          <div class="cloak"></div>
        </div>
      </div>
      <div class="info">
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
        <Link to="/" >
          <Signup>HOME</Signup>
        </Link>
       
      </div>
    </div>
  );
}

export default NotFound;


const Signup = styledComponents.a`
width: 100%;
font-weight: bold;
background-color: #0063e5;
padding: 15px 20px;
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