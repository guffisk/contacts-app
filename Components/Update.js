import React, { Component } from "react";
import TextInputField from "./TextInputField";

export default class Update extends Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    phone: this.props.phone
  };
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
        <tbody>
          <tr>
            <td>
              <TextInputField
                name="name"
                value={this.state.name}
                onChange={this.handleTextChange}
              />
            </td>
            <td>
              <TextInputField
                name="email"
                value={this.state.email}
                onChange={this.handleTextChange}
              />
            </td>
            <td>
              <TextInputField
                name="phone"
                value={this.state.phone}
                onChange={this.handleTextChange}
              />
            </td>
            <td>
              <button
                onClick={() =>
                  this.props.onUpdateButtonClick({
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email,
                    id: this.props.id
                  })
                }
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </>
    );
  }
}
