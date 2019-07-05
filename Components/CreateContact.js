import React, { Component } from "react";
import TextInputField from "./TextInputField";

export default class CreateContact extends Component {
  render() {
    return (
      <div>
        <TextInputField
          name="name"
          value={this.props.name}
          onChange={this.props.handleTextChange}
          placeholder="enter name"
        />
        <TextInputField
          name="email"
          value={this.props.email}
          onChange={this.props.handleTextChange}
          placeholder="enter email"
        />
        <TextInputField
          name="phone"
          value={this.props.phone}
          onChange={this.props.handleTextChange}
          placeholder="enter phone"
        />
        <button onClick={this.props.onCreateButtonClick}>Add info</button>
      </div>
    );
  }
}
