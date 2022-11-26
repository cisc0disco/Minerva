import styled from "styled-components";
import Modal from "styled-react-modal";

export const MainStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

export const SideBar = styled.div`
  display: flex;
  position: fixed;
  width: 12.5vw;
  height: 100vh;
  background-color: black;
  flex-direction: column-reverse;
  margin-top: auto;
  align-items: center;
  justify-content: top;

  #buttons {
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    width: 100%;
    align-items: center;
  }

  #button {
    margin-top: 2em;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: auto;
    color: white;
  }

  #buttonIcon {
    margin-left: 1em;
    margin-right: 1em;
  }

  #caret {
    position: absolute;
    right: 0;
    margin-right: 1.5em;
  }

  #imageContainer {
    position: relative;
    height: 4.5vw;
    width: 4.5vw;
    margin-top: auto;
    margin-bottom: 1em;
  }

  #avatar {
    border-radius: 25%;
    cursor: pointer;
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
