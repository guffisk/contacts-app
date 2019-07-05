import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import CreateContact from "./CreateContact";
import Display from "./Display";

import {
  getContacts,
  createContacts,
  deleteContacts,
  updateContacts
} from "../actions/contacts";

class Home extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
    //idForNewContact: 1
  };

  componentWillMount() {
    this.props.getContacts();
  }

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getContacts = () => {
    axios
      .get("http://192.168.1.28:5000/api/contacts/all")
      .then(res => {
        this.setState({ contacts: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onCreateButtonClick = () => {
    let contact = {
      //id: this.state.idForNewContact,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    this.props.createContacts(contact);
  };

  onDeleteButtonClick = id => {
    this.props.deleteContacts(id);
  };

  onUpdateButtonClick = contact => {
    let allContacts = this.state.contacts;
    for (let c in allContacts) {
      if (allContacts[c].id === contact.id) {
        allContacts[c].name = contact.name;
        allContacts[c].phone = contact.phone;
        allContacts[c].email = contact.email;
      }
    }

    this.props.updateContacts(contact);
  };

  render() {
    return (
      <div>
        <CreateContact
          onCreateButtonClick={this.onCreateButtonClick}
          handleTextChange={this.handleTextChange}
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
        />

        <Display
          contacts={this.props.contacts}
          onDeleteButtonClick={this.onDeleteButtonClick}
          onUpdateButtonClick={this.onUpdateButtonClick}
        />
        <Link to="/other">Go to other</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contactReducer.contacts
});

export default connect(
  mapStateToProps,
  { getContacts, createContacts, deleteContacts, updateContacts }
)(Home);
