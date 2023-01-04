import styled from "styled-components";
import Modal from "styled-react-modal";

export const MainStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background_color};
  display: flex;
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
