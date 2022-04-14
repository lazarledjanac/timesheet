import React from "react";
import LetterButton from "../components/LetterButton";

function LetterButtonsContainer() {
  var letters = [];
  for (let i = 97; i < 123; i++) {
    letters.push(<LetterButton letter={String.fromCharCode(i)} />);
  }
  return <div className="alpha">{letters}</div>;
}

export default LetterButtonsContainer;
