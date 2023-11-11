import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-im11jpeg.jpeg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container">
        <h1>github analytics dashboard</h1>
        <img src={loginImg} alt="github-user" />
        <button onClick={loginWithRedirect} className="btn">
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: #ADD8E6;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
    color: #000 !important;
  }
  img {
    margin-bottom: 2rem;
    border-radius: 20px;
  }
  h1 {
    font-family: Georgia, serif;
    margin-bottom: 1.5rem;
  }  
`;
export default Login;
