import _ from 'lodash';
import { RECEIVE_VIDEOS } from '../actions';

const defaultState = {
  videosList: [],
};

export default function home(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return _.assign({}, state, {
        videosList: action.videos,
      });
    default:
      return state;
  }
}
