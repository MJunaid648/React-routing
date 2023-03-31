import React from "react";
import styled from "styled-components";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import AboutPage from "./AboutPage";
import { Route, Routes, NavLink } from "react-router-dom";

const NavBar = styled.div`
  border: 2px dotted rgba(45, 94, 13, 1);
  background-color: aliceblue;
  margin: 5px;
  margin-left: auto;
  margin-right: auto;
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  li {
    font-weight: bold;
    display: inline;
    margin: 5px 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }

  ul li a {
    color: #000;
  }

  ul li a:hover {
    color: #00a8ff;
  }

  ul li a.active {
    color: #00a8ff;
  }
`;
const App = () => {
  return (
    <div>
      <NavBar>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About-us</NavLink>
          </li>
        </ul>
      </NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
