import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetings_reducer';

const rootReducer = combineReducers({
  greets: greetingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
