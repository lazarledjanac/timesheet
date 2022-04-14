import React from "react";

export default function Pagination() {
  return (
    <div className="pagination">
      <ul>
        <li>
          <a href="javascript:;">1</a>
        </li>
        <li>
          <a href="javascript:;">2</a>
        </li>
        <li>
          <a href="javascript:;">3</a>
        </li>
        <li className="last">
          <a href="javascript:;">Next</a>
        </li>
      </ul>
    </div>
  );
}
