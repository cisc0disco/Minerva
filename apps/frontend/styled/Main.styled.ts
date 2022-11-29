import styled from "styled-components";
import Modal from "styled-react-modal";

export const MainStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

export const StyledSideBar = styled.div`
  width: 8em;
  height: 100vh;
  border-right: 1px solid #b7b7b7;
  display: flex;
  flex-direction: column;
  justify-content: center;

  --main-color: #b1b1b3;

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
    background-color: #fff;
    width: 4em;
    height: 4em;
    border-radius: 50%;
  }
  .active > .iconImage {
    background-color: #4c96f6;
  }

  .active > .iconImage > svg {
    color: white;
  }

  .border {
    background-color: #b7b7b7;
    height: 1px;
    width: 85%;
    align-self: center;
  }
`;

export const ModalStyled = Modal.styled`
  width: 18em;
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 1em;
  flex-direction: column;
  margin-top: auto;
  margin-right: auto;
  margin-left: 7em;
  margin-bottom: 0.7em;
  transition: width 2s, height 2s, background-color 2s, transform 2s;


  #content {
    width: 90%;
    height: 3.8em;
    margin-top: 1em;
    display: flex;
    border-bottom: 1px solid #F0F0F0;
  }



  #avatar {
    border-radius: 25%;
    margin-right: 1em;
  }

  #info {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  #username {
    font-size: 1.5em;
    margin-bottom: 0.1em;
  }

  #email {
    color: gray;
  }

  #buttons {
    margin-bottom: 1em;
  }

  #buttons > * {
    cursor: pointer;
  }

  #logoutButton {
    display: flex;
  }

  #logoutButton:first-child {
    vertical-align: middle;
  }

  #icon {
    margin-right: 0.3em;
  }
`;
