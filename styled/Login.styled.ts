import styled from "styled-components";

export const LoginStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #131224;
  font-family: "Inter", sans-serif;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h2 {
    font-weight: 700;
    font-size: 2.125em;
  }

  form {
    margin-top: 2em;
    width: 20em;
  }

  .alert {
    display: flex;
    background-color: #2b212d;
    padding: 0.75em;
    gap: 0.5em;
    vertical-align: center;
    border-radius: 0.2em;
    margin-bottom: 1.5em;
  }

  .required::after {
    content: " *";
    color: #f8696e;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .input-container input {
    appearance: none;
    text-decoration: none;
    -webkit-box-shadow: inset 0 0 0px 9999px #131224;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 0.375em;
    background: none;

    outline: 2px solid transparent;
    padding-inline-start: 1em;
    padding-inline-end: 1em;
    height: 2.5em;
  }

  .input-container input:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: border 0.3s;
  }

  .input-container input:focus-visible {
    box-shadow: 0 0 0 2px #63b3ed;
    transition: all 1s;
  }

  .password {
    margin-top: 1.5em;
  }

  .submit {
    font-weight: 700;
    width: 100%;
    height: 2.4em;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 0.375em;
    margin-top: 1em;
  }
`;
