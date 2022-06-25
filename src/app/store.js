import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/messager/messagerSlice';
// import counterReducer from '../features/counter/counterSlice';
/*
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
*/

// export const store = createStore(messagerReducer);
export const store = configureStore({
    reducer: {
        messager: reducer
    },
});
