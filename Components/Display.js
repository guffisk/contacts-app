import React, { Component } from "react";
import Update from "./Update";
//import TextInputField from "./TextInputField";

export default class Display extends Component {
  // handleTextChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <div>
        <table align="center">
          <tbody>
            {this.props.contacts.map(contact => (
              <tr>
                <td>CONTACT NO. : {contact.id}</td>
                <td>Name : {contact.name}</td>
                <td>Email : {contact.email}</td>
                <td>Phone : {contact.phone}</td>
                <td>
                  <button
                    onClick={() => this.props.onDeleteButtonClick(contact.id)}
                  >
                    DELETE
                  </button>
                </td>
                <Update
                  onUpdateButtonClick={this.props.onUpdateButtonClick}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  id={contact.id}
                  handleTextChange={this.handleTextChange}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
