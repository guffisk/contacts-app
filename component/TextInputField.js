import React from "react";

export default function TextInputField(props) {
  return (
    <div>
      <input
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
