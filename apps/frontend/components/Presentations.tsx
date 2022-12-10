import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { StyledPresentations } from "../styled/Presentations.styled";
import Block from "./Block";

export default function Presentations({ props }) {
  const trida = "3.K";

  const data = props;

  const blocks = data.map((block) => {
    return (
      <Block
        title={block.attributes.nazev}
        previewImage={
          `http://localhost:1337` +
          block.attributes.preview.data.attributes.formats.medium.url
        }
        file={
          `http://localhost:1337` + block.attributes.soubor.data.attributes.url
        }
        date={block.attributes.datum}
      />
    );
  });

  return (
    <StyledPresentations>
      <div className="view">{blocks}</div>
    </StyledPresentations>
  );
}
