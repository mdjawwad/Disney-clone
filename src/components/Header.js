import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      <NavMenu>
        <Link to="/">
          <a href="!#">
            <img src="/images/home-icon.svg" alt="home" />
            <span>HOME</span>
          </a>
        </Link>
        <a href="!#">
          <img src="/images/search-icon.svg"  alt="search"/>
          <span>Search</span>
        </a>
        <a href="!#">
          <img src="/images/watchlist-icon.svg" alt="watchList" />
          <span>watchlist</span>
        </a>
        <a href="!#">
          <img src="/images/original-icon.svg" alt="originals" />
          <span>originals</span>
        </a>
        <a href="!#">
          <img src="/images/movie-icon.svg" alt="movies"/>
          <span>movies</span>
        </a>
        <a href="!#">
          <img src="/images/series-icon.svg" alt="series"/>
          <span>series</span>
        </a>
      </NavMenu>
      <UserImg src="/images/profile.png" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  color: #fff;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 40px;

  a {
    display: flex;
    cursor: pointer;

    align-items: center;
    text-decoration: none !important;

    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      color: #ffff;
      text-transform: uppercase;
      letter-spacing: 1.75px;
      padding: 0 1px;
      position: relative;

      &:after {
        content: "";
        background-color: white;
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scale(0);
      }
    }
    &:hover {
      span:after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  width: 44px;
  cursor: pointer;
`;
