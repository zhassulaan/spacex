import axios from 'axios';
import {
  FETCH_ADVANTAGES_REQUEST,
  FETCH_ADVANTAGES_SUCCESS,
  FETCH_ADVANTAGES_FAILURE,
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from './constants';

// Advantages
export const fetchAdvantages = () => async (dispatch) => {
  dispatch({ type: FETCH_ADVANTAGES_REQUEST });

  try {
    const response = await axios.get('http://13.53.174.131:8000/api/home/advantages/');
    dispatch({
      type: FETCH_ADVANTAGES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ADVANTAGES_FAILURE,
      payload: error.message,
    });
  }
};

// Menu
export const fetchMenu = () => async (dispatch) => {
  dispatch({ type: FETCH_MENU_REQUEST });

  try {
    const response = await axios.get('http://13.53.174.131:8000/api/home/menu/');
    dispatch({
      type: FETCH_MENU_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MENU_FAILURE,
      payload: error.message,
    });
  }
};
