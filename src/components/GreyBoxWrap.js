import React from "react";

function GreyBoxWrap(props) {
  return (
    <div className="grey-box-wrap reports">
      <a href="#new-member" className="link new-member-popup">
        Create new {props.title}
      </a>
      <div className="search-page">
        <input type="search" name="search-clients" className="in-search" />
      </div>
    </div>
  );
}

export default GreyBoxWrap;
