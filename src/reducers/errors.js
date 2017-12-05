import { RECEIVE_API_ERROR } from '../actions';

export default function errors(state = null, action) {
  switch (action.type) {
    case RECEIVE_API_ERROR:
      return action.errorMessage;
    default:
      return state;
  }
}
