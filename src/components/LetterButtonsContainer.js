import React, { useState } from "react";

function LetterButtonsContainer({ onSetLetter }) {
  var letters = [];
  for (let i = 97; i < 123; i++) {
    letters.push({ id: i });
  }
  const [letterState, setLetterState] = useState({
    activeLetter: null,
    objects: letters,
  });
  function toggleActive(index) {
    setLetterState({
      ...letterState,
      activeLetter: letterState.objects[index],
    });
    if (letterState.objects[index] === letterState.activeLetter) {
      setLetterState({ ...letterState, activeLetter: null });
      onSetLetter(null);
    }
  }

  function toggleActiveStyles(index) {
    if (letterState.objects[index] === letterState.activeLetter) {
      return "li active";
    } else {
      return "";
    }
  }

  return (
    <div className="alpha">
      {letterState.objects.map((object, index) => (
        <li
          key={`list item - ${index}`}
          className={toggleActiveStyles(index)}
          onClick={() => toggleActive(index)}
        >
          <a
            key={`letter - ${index}`}
            defaultValue={String.fromCharCode(object.id)}
            onClick={() => {
              let letter = String.fromCharCode(object.id);
              onSetLetter(letter);
            }}
          >
            {String.fromCharCode(object.id)}
          </a>
        </li>
      ))}
    </div>
  );
}

export default LetterButtonsContainer;
