import { configureStore } from '@reduxjs/toolkit';
import {messagerReducer} from '../features/messager/MessagerReducer';
import {createStore} from 'redux';
// import counterReducer from '../features/counter/counterSlice';
/*
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
*/

export const store = createStore(messagerReducer);
