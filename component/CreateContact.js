import React, { Component } from "react";
import TextInputField from "./TextInputField";
export default class CreateContact extends Component {
  render() {
    return (
      <div>
        <TextInputField
          name="name"
          value={this.props.name}
          placeholder="Enter Name.."
          onChange={this.props.handleTextChange}
        />
        <TextInputField
          name="email"
          placeholder="Enter Email.."
          value={this.props.email}
          onChange={this.props.handleTextChange}
        />
        <TextInputField
          name="phone"
          placeholder="Enter Phone..."
          value={this.props.phone}
          onChange={this.props.handleTextChange}
        />

        <button onClick={this.props.onCreateButtonClick}>CREATE</button>
      </div>
    );
  }
}
