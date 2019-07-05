import {
  GET_CONTACTS,
  CREATE_CONTACTS,
  UPDATE_CONTACTS,
  DELETE_CONTACTS
} from "./Type";

import axios from "axios";

export const getContacts = () => dispatch => {
  axios
    .get("http://192.168.1.67:5000/api/contacts/all")
    .then(res => {
      dispatch({
        type: GET_CONTACTS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const createContacts = contact => dispatch => {
  axios
    .post("http://192.168.1.67:5000/api/contacts/new", contact)
    .then(res => {
      dispatch({
        type: CREATE_CONTACTS
      });
      dispatch(getContacts());
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteContacts = id => dispatch => {
  axios
    .delete("http://192.168.1.67:5000/api/contacts/delete/" + id)
    .then(res => {
      dispatch({
        type: DELETE_CONTACTS
      });
      dispatch(getContacts());
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateContacts = contact => dispatch => {
  axios
    .put("http://192.168.1.67:5000/api/contacts/update/" + contact.id, contact)
    .then(res => {
      dispatch({
        type: UPDATE_CONTACTS
      });
      dispatch(getContacts());
    })
    .catch(err => {
      console.log(err);
    });
};
