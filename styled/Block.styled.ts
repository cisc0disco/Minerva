import styled from "styled-components";

export const BlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  word-wrap: break-word;
  background-color: #232937;
  width: 90%;
  cursor: pointer;
  padding: 1.25em;
  border-radius: 0.375em;
  gap: 3;
  font-family: "Roboto", sans-serif;

  h2 {
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: 0.3em;
  }

  h3 {
    font-size: 1em;
  }

  .section {
    max-height: 100em;
    height: auto;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  .section {
    margin-bottom: 0.5em;
  }

  .section.collapsed {
    max-height: 0;
    height: auto;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  .list > li {
    margin-left: 1rem;
  }

  .hours > h2 {
    font-size: 1.5em;
    color: #2d5592;
  }

  .button {
    margin-top: 0.5em;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .button button {
    width: 95%;
    height: 2em;
    background-color: #2d3644;
    border-radius: 0.3em;
  }
`;
