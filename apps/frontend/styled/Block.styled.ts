import styled from "styled-components";

export const BlockStyled = styled.div`
  height: 16em;
  width: 12em;
  border-radius: 0.7em;
  box-shadow: 6px 8px 15px -3px rgba(0, 0, 0, 0.49);
  display: flex;
  flex-direction: column;
  align-items: center;

  .imageContainer {
    border-radius: 0.7em;
    height: 7em;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .blockImage {
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

  .blockTitle {
    text-align: center;
    font-family: "Inter", sans-serif;
    padding: 0.8em 0 0.6em;
    font-size: 1.2em;
    color: #3d3a5d;
  }

  .blockDate {
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 1em;
    border: 2px solid #efefef;
    border-radius: 0.3em;
    width: auto;
    margin: 0.5em 2.5em 1.5em 2.5em;
    color: #555556;
  }

  .blockButton {
    background: #4251d5;
    color: white;
    border: none;
    padding: 0.5em 0.8em 0.5em 0.8em;
    font: inherit;
    font-size: 0.9em;
    cursor: pointer;
    outline: inherit;
    display: inline-flex;
    align-items: center;
    line-height: 0.9em;
    border-radius: 0.3em;
    text-decoration: none;
  }
`;
