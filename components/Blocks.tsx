import { useState } from "react";
import { BlockStyled } from "styled/Block.styled";

type BlockType = {
  id: number;
  Name: string;
  Description: string;
  Range: string;
};

const Blocks = ({ hours }) => {
  const [chosenHours, setChosenHours] = useState(1);

  function handleClick(e: React.MouseEvent<HTMLElement>, id: number) {
    const { target } = e;
    if ((target as HTMLElement).tagName.toLowerCase() !== "button") {
      setChosenHours(id);
    }
  }

  if (hours) {
    return hours.map((block: BlockType) => {
      const [show, setShow] = useState(false);

      const handleToggle = () => setShow(!show);

      return (
        <BlockStyled
          className={chosenHours == block.id ? "active" : ""}
          key={block.id}
          onClick={(e) => handleClick(e, block.id)}
        >
          <h2>{block.Name}</h2>
          <div className={`section ${show ? "" : "collapsed"}`}>
            <ul className="list">
              {block.Description.split("\n").map(
                (line: string, index: number) => {
                  return <li key={index}>{line}</li>;
                }
              )}
            </ul>
          </div>
          <div className="hours">
            Hodiny: <br />
            <h2 color="blue.600">{block.Range}</h2>
          </div>
          <div className="button" onClick={handleToggle}>
            <button>Zobrazit {show ? "Méně" : "Více"}</button>
          </div>
        </BlockStyled>
      );
    });
  } else {
    return <p>Nothing found</p>;
  }
};

export default Blocks;
