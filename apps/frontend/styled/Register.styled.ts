import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27em;
  height: 43em;
  border-radius: 1em;
  background-color: white;

  label {
    margin-bottom: 0.5em;
  }

  #title {
    color: black;
    padding: 1em;
    font-family: "Roboto";
    margin-bottom: 1em;
    text-align: center;
  }

  #name {
    width: 70%;
    background-color: white;
    height: 2em;
    line-height: 1.5em;
    color: black;
    font-size: 1.5em;
    padding: 0.5em;
    border-color: black;
    border-radius: 0.3em;
    margin-bottom: 0.5em;
  }

  #email {
    width: 70%;
    background-color: white;
    color: gray;
    font-size: 1.5em;
    height: 2em;
    margin-bottom: 1em;
    padding: 0.5em;
    border-color: black;
    border-radius: 0.3em;
  }

  #submit {
    background-color: white;
    color: black;
    width: 70%;
    margin-top: 3em;
    height: 3em;
    border-radius: 0.4em;
    border-color: black;
    font-size: 1em;
    line-height: 3em;
    cursor: pointer;
  }

  img {
    margin-bottom: 3em;
    border-radius: 50%;
    box-shadow: 0.5em 0.5em 1em #888888;
  }

  .select {
    position: relative;
    /*Don't really need this just for demo styling*/

    float: left;
    width: 10em;
  }

  .select:after {
    content: "\f078";
    font: normal normal normal 1em/1 "FontAwesome";
    color: black;
    right: 11px;
    top: 6px;
    height: 34px;
    padding: 15px 0px 0px 8px;
    border-left: 1px solid black;
    position: absolute;
    pointer-events: none;
  }

  /* IE11 hide native button (thanks Matt!) */
  select::-ms-expand {
    display: none;
  }

  .select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Add some styling */

    display: block;
    width: 100%;
    max-width: 320px;
    height: 50px;
    float: right;
    margin: 5px 0px;
    padding: 0px 24px;
    font-size: 16px;
    line-height: 1.75;
    color: #333;
    background-color: #ffffff;
    background-image: none;
    border: 0.15em solid black;
    -ms-word-break: normal;
    word-break: normal;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
