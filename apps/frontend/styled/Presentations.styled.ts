import styled from "styled-components";

type Presentations = {
  background: string;
};

export const StyledPresentations = styled.div<Presentations>`
  height: 100vh;
  width: calc(100vw - 8em);
  margin-left: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  .view {
    width: 95%;
    height: 90%;
  }
`;
