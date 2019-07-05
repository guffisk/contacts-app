import React, { Component } from "react";

export default class DisplayContacts extends Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    phone: this.props.phone
  };
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.props.contacts.map(contact => (
              <tr>
                <td>Name:{contact.name}</td>
                <td>Email:{contact.email}</td>
                <td>Phone:{contact.phone}</td>
                <td>
                  <button
                    onClick={() => this.props.onDeleteButtonClick(contact.id)}
                  >
                    DELETE
                  </button>
                </td>
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
                  <button onClick={this.props.onUpdateButtonClick}>
                    UPDATE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
