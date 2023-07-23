import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { advantagesReducer, menuReducer } from './reducers';

const rootReducer = combineReducers({
  advantages: advantagesReducer,
  menu: menuReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
