import axios from 'axios';
import { FETCH_USER } from './types';

// async await syntax
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log(res);
  dispatch({ type: FETCH_USER, payload: res });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitRating = (values, history) => async dispatch => {
  const res = await axios.post('/api/ratings', values);

  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};
