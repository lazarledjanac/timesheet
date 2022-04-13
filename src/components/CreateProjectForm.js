import React from "react";

export default function () {
  return (
    <div class="new-member-wrap">
      <div id="new-member" class="new-member-inner">
        <h2>Create new project</h2>
        <ul class="form">
          <li>
            <label>Project name:</label>
            <input type="text" class="in-text" />
          </li>
          <li>
            <label>Description:</label>
            <input type="text" class="in-text" />
          </li>
          <li>
            <label>Customer:</label>
            <select>
              <option>Select customer</option>
              <option>Adam Software NV</option>
              <option>Clockwork</option>
              <option>Emperor Design</option>
            </select>
          </li>
          <li>
            <label>Lead:</label>
            <select>
              <option>Select lead</option>
              <option>Sasa Popovic</option>
              <option>Sladjana Miljanovic</option>
            </select>
          </li>
        </ul>
        <div class="buttons">
          <div class="inner">
            <a href="javascript:;" class="btn green">
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
