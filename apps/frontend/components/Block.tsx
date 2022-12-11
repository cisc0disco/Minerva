import { BlockStyled } from "../styled/Block.styled";

type BlockPropsTypes = {
  title: string;
  previewImage: string;
  date: string;
  file: string;
};

const Block = (props: BlockPropsTypes) => {
  return (
    <BlockStyled>
      <div className="imageContainer">
        <img className="blockImage" src={props.previewImage} alt="" />
      </div>
      <h2 className="blockTitle">{props.title}</h2>
      <h2 className="blockDate">{props.date}</h2>
      <a className="blockButton" href={props.file} download={true}>
        Stáhnout
      </a>
    </BlockStyled>
  );
};

export default Block;
