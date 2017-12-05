import axios from 'axios';
import config from '../config';
import { startLoading, stopLoading } from './index';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export function receiveVideos(videos) {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
}

export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';
export function receiveApiError(errorMessage) {
  return {
    type: RECEIVE_API_ERROR,
    errorMessage,
  };
}

// Fetch videos by playlist id
export function fetchVideosList(channelId, query) {
  const params = {
    part: 'snippet',
    channelId,
    key: config.apiKey,
    order: 'date',
    maxResults: 50,
    q: query,
  };
  return (dispatch) => {
    dispatch(startLoading());

    axios.get(`${config.endpoint}/search`, { params })
      .then((response) => {
        dispatch(receiveVideos(response.data.items));
        dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
        dispatch(receiveApiError(error.response));
        dispatch(stopLoading());
      });
  };
}

// Get channel id
export function fetchVideos(username, query) {
  const params = {
    part: 'id',
    forUsername: username || 'pewdiepie',
    key: config.apiKey,
  };
  return (dispatch) => {
    dispatch(startLoading());

    axios.get(`${config.endpoint}/channels`, { params })
      .then((response) => {
        dispatch(fetchVideosList(response.data.items[0].id, query));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
        dispatch(receiveApiError(error.response));
        dispatch(stopLoading());
      });
  };
}
