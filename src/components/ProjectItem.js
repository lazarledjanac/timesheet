import React from "react";

export default function (props) {
  return (
    <div class="item">
      <div class="heading">
        <span>{props.name}</span>{" "}
        <span>
          <em>({props.client})</em>
        </span>
        <i>+</i>
      </div>
      <div class="details">
        <ul class="form">
          <li>
            <label>Project name:</label>
            <input type="text" class="in-text" value={props.name} />
          </li>
          <li>
            <label>Lead:</label>
            <select>
              <option>{props.lead}</option>
              <option>Sasa Popovic</option>
              <option>Sladjana Miljanovic</option>
            </select>
          </li>
        </ul>
        <ul class="form">
          <li>
            <label>Description:</label>
            <input type="text" class="in-text" value={props.description} />
          </li>
        </ul>
        <ul class="form last">
          <li>
            <label>Customer:</label>
            <select>
              <option>{props.client}</option>
              <option>Adam Software NV</option>
              <option>Clockwork</option>
              <option>Emperor Design</option>
            </select>
          </li>
          <li class="inline">
            <label>Status:</label>
            <span class="radio">
              <label for="inactive">Active:</label>
              <input type="radio" value="1" name="status" id="inactive" />
            </span>
            <span class="radio">
              <label for="active">Inactive:</label>
              <input type="radio" value="2" name="status" id="active" />
            </span>
            <span class="radio">
              <label for="active">Archive:</label>
              <input type="radio" value="3" name="status" id="active" />
            </span>
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
