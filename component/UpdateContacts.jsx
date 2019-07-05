import React, { Component } from "react";

export default class UpdateContact extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <input
                name="name"
                value={this.state.name}
                onChange={this.props.handleTextChange}
              />
            </td>
            <td>
              <input
                name="email"
                value={this.state.email}
                onChange={this.props.handleTextChange}
              />
            </td>
            <td>
              <input
                name="phone"
                value={this.state.phone}
                onChange={this.props.handleTextChange}
              />
            </td>
            <td>
              <button
                onClick={() =>
                  this.props.onUpdateButtonClick({
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email,
                    id: this.props.contact.id
                  })
                }
              >
                UPDATE
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
