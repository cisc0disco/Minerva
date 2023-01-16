import styled from "styled-components";

export const SidePanelStyled = styled.div`
  height: 100%;
  width: 25em;
  overflow: auto;

  //borderLeft={{ base: "", md: "1px solid #252531" }}
  border-left: 1px solid #252531;
  //transition: width 3s 0s ease-in-out;

  .content {
    min-width: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    margin-top: 1em;
  }

  .close-container {
    width: 100%;
    margin: 0.5em 0 0.5em 0;
    padding-right: 1.5em;
    display: flex;
    justify-content: flex-end;
  }

  .close-button::after {
    display: flex;
    content: "✕";
    font-size: 1.5em;
    color: white;
  }

  .active {
    transition: box-shadow 0.3s;
    box-shadow: 0 0 0em 0.25em #4c96f6;
  }
`;
