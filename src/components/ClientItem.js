import React from "react";

function ClientItem(props) {
  return (
    <div class="item">
      <div class="heading">
        <span>{props.name}</span>
        <i>+</i>
      </div>
      <div class="details">
        <ul class="form">
          <li>
            <label>Client name:</label>
            <input type="text" class="in-text" />
          </li>
          <li>
            <label>Zip/Postal code:</label>
            <input type="text" class="in-text" />
          </li>
        </ul>
        <ul class="form">
          <li>
            <label>Address:</label>
            <input type="text" class="in-text" />
          </li>
          <li>
            <label>Country:</label>
            <select>
              <option>Select country</option>
            </select>
          </li>
        </ul>
        <ul class="form last">
          <li>
            <label>City:</label>
            <input type="text" class="in-text" />
          </li>
        </ul>
        <div class="buttons">
          <div class="inner">
            <a href="javascript:;" class="btn green">
              Save
            </a>
            <a href="javascript:;" class="btn red">
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientItem;
