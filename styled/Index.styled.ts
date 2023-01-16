import styled from "styled-components";

export const IndexStyled = styled.div`
  background: #131224;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  h1 {
    color: white;
    font-family: "Poppins", sans-serif;
    padding: 0 5% 0 5%;
    text-align: center;
    font-size: 2em;
  }

  button {
    font-family: "Inter", sans-serif;
    font-size: 1.25em;
    color: #72e3d1;
    font-weight: 700;
    border: 1px solid #72e3d1;
    width: 6.5em;
    height: 2.2em;
    border-radius: 0.3em;
  }

  button:hover {
    background-color: #72e3d1;
    color: black;
    transition: background-color 1s;
  }
`;
