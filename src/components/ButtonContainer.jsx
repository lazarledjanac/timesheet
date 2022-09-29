import React from "react";

export default function ButtonContainer({ children }) {
  return (
    <div className="buttons">
      <div className="inner">{children}</div>
    </div>
  );
}
