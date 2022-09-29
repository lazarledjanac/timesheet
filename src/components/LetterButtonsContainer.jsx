import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleActiveLetter } from "../features/Projects";

function LetterButtonsContainer() {
  const dispatch = useDispatch();
  const { letter, letters } = useSelector((state) => state.projects);

  return (
    <div className="alpha">
      {letters.map((object, index) => (
        <li
          key={`list item - ${index}`}
          className={letter == object.id ? "li active" : ""}
          onClick={() => dispatch(toggleActiveLetter(object.id))}
        >
          <a
            key={`letter - ${index}`}
            defaultValue={String.fromCharCode(object.id)}
          >
            {String.fromCharCode(object.id)}
          </a>
        </li>
      ))}
    </div>
  );
}

export default LetterButtonsContainer;
