import React from "react";

function LetterButton(props) {
  return (
    <li>
      <a value={props.letter}>{props.letter}</a>
    </li>
  );
}

export default LetterButton;

// li class : "active" i "disabled"
