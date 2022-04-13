import React from "react";

function GreyBoxWrap(props) {
  return (
    <div class="grey-box-wrap reports">
      <a href="#new-member" class="link new-member-popup">
        Create new {props.title}
      </a>
      <div class="search-page">
        <input type="search" name="search-clients" class="in-search" />
      </div>
    </div>
  );
}

export default GreyBoxWrap;
