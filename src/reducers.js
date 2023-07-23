import {
  FETCH_ADVANTAGES_REQUEST,
  FETCH_ADVANTAGES_SUCCESS,
  FETCH_ADVANTAGES_FAILURE,
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from './constants';

const initialState = {
  advantages: {
    data: [],
    loading: false,
    error: null,
  },
  menu: {
    data: [],
    loading: false,
    error: null,
  },
};

export const advantagesReducer = (state = initialState.advantages, action) => {
  switch (action.type) {
    case FETCH_ADVANTAGES_REQUEST:
      return { ...state, loading: true };
    case FETCH_ADVANTAGES_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_ADVANTAGES_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export const menuReducer = (state = initialState.menu, action) => {
  switch (action.type) {
    case FETCH_MENU_REQUEST:
      return { ...state, loading: true };
    case FETCH_MENU_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_MENU_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
