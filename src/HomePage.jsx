import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;
const Divi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  button {
    border-radius: 15px;
    font-size: 15px;
    width: 200px;
    height: 30px;
    font-weight: 300;
    background-color: aliceblue;
    cursor: pointer;
  }
  button:hover {
    color: #00a8ff;
    font-size: 18px;
  }
`;
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Divi>
      <Title>HOME-PAGE</Title>
      <br />
      <h1>Programatically Navigation using buttons: </h1>
      <button onClick={() => navigate("/about")}>About-us</button>
      <button onClick={()=>navigate('/products')}>Products</button>
    </Divi>
  );
};

export default HomePage;
