import {
  GET_CONTACTS,
  CREATE_CONTACTS,
  UPDATE_CONTACTS,
  DELETE_CONTACTS
} from "../actions/Type";

const initialState = {
  contacts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case CREATE_CONTACTS:
      return state;
    case DELETE_CONTACTS:
      return state;
    case UPDATE_CONTACTS:
      return state;

    default:
      return state;
  }
}
