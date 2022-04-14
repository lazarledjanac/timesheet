import React from "react";
import ButtonContainer from "./ButtonContainer";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
import DropdownList from "./DropdownList";
import RadioButton from "./RadioButton";
import TextInput from "./TextInput";

export default function ProjectItem(props) {
  return (
    <div className="item">
      <div className="heading">
        <span>{props.name}</span>{" "}
        <span>
          <em>({props.client})</em>
        </span>
        <i>+</i>
      </div>
      <div className="details">
        <ul className="form">
          <TextInput value={props.name} label="Project Name" />
          <DropdownList
            label="Lead:"
            default={props.lead}
            options={["Sasa Popovic", "Sladjana Miljanovic"]}
          />
        </ul>
        <ul className="form">
          <TextInput value={props.description} label="Project description" />
        </ul>
        <ul className="form last">
          <DropdownList
            label="Customer:"
            default={props.client}
            options={["Adam Software NV", "Clockwork", "Emperor Design"]}
          />
          <li className="inline">
            <label>Status:</label>
            <RadioButton value="1" label="Active" id="inactive" />
            <RadioButton value="2" label="Inactive" id="active" />
            <RadioButton value="3" label="Archive" id="active" />
          </li>
        </ul>
        <ButtonContainer>
          <SaveButton />
          <DeleteButton />
        </ButtonContainer>
      </div>
    </div>
  );
}
