import React from "react";

export default function(props) {
  return (
    <div>
      <input
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="reusable-input-field"
      />
    </div>
  );
}
