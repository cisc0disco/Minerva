import styled from "styled-components";

type SideBar = {
  background: string;
  borderColor: string;
};

export const StyledSideBar = styled.div<SideBar>`
  width: 8em;
  height: 100vh;
  border-right: 1px solid ${(props) => props.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: top;
  --main-color: #b1b1b3;
  background-color: ${(props) => props.background};
  z-index: 100;

  #centerIcons {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 1.5em;
    margin-bottom: 3em;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 6em;
    cursor: pointer;
  }

  .icon > p {
    margin-top: 0.5em;
    font-family: "Inter", sans-serif;
  }

  .icon > * {
    color: var(--main-color);
  }

  #bottomIcons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3em;
    height: auto;
  }

  .iconImage {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ;
    width: 4em;
    height: 4em;
    border-radius: 50%;
  }

  .active > .iconImage {
    background-color: #4c96f6;
  }

  .active > .iconImage > svg {
    color: white;
    transition: color 0.5s;
  }

  .border {
    margin-top: 5em;
    background-color: ${(props) => props.borderColor};
    height: 1px;
    width: 85%;
    align-self: center;
  }
`;
