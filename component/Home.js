import React, { Component } from "react";
import CreateContact from "./CreateContact";
import DisplayContacts from "./DisplayContacts";
import axios from "axios";
import { connect } from "react-redux";
import { getContacts } from "../actions/contacts";

export class HomeOne extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    idForNewContact: 1
  };
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillMount() {
    this.props.getContacts();
  }
  // getContacts = () => {
  // axios
  //     .get("http://192.168.1.28:5000/api/contacts/all")
  //     .then(res => this.setState({ contacts: res.data.data }))
  //     .catch(err => console.log(err));
  ///  };
  onCreateButtonClick = () => {
    let contact = {
      id: this.state.idForNewContact,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };
    axios
      .post("http://192.168.1.28:5000/api/contacts/new", contact)
      .then(res => {
        console.log(res);
        this.getContacts();
      })
      .catch(err => {
        console.log(err);
      });
  };
  onDeleteButtonClick = id => {
    axios
      .delete("http://192.168.1.28:5000/api/contacts/delete/" + id)
      .then(res => {
        console.log(res);
        this.getContacts();
      })
      .catch(err => {
        console.log(err);
      });
    let oldContacts = this.state.contacts;
    console.log(oldContacts);
    oldContacts = oldContacts.filter(contact => contact.id !== id);
    this.setState({ contacts: oldContacts });
  };
  onUpdateButtonClick = contact => {
    axios
      .put(
        "http://192.168.1.28:5000/api/contacts/contacts/update/" + contact.id,
        contact
      )
      .then(res => {
        this.getContacts();
      })
      .catch(err => {
        console.log(err);
      });
    let indexOfContactTOUpdate = this.state.contacts.findIndex(
      c => c.id === contact.id
    );
    this.setState(prevState => ({
      ...prevState,
      contacts: [
        ...prevState.contacts.slice(0, indexOfContactTOUpdate),
        contact,
        ...prevState.contacts.slice(indexOfContactTOUpdate + 1)
      ]
    }));
  };
  render() {
    return (
      <div>
        <CreateContact
          onCreateButtonClick={this.onCreateButtonClick}
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
          handleTextChange={this.handleTextChange}
        />
        <DisplayContacts
          onDeleteButtonClick={this.onDeleteButtonClick}
          onUpdateButtonClick={this.onUpdateButtonClick}
          contacts={this.props.contacts}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contactReducer.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(HomeOne);
