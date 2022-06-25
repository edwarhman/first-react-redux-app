import { createSlice } from "@reduxjs/toolkit";

// properties initial state
const initialState = {
    messages: []
};

// add message action (modify the state)
const add = (state, action)=> {
    state.messages.push(action.payload);
}

// create the slice
const messagerSlice = createSlice({
    name: 'messager',
    //set initial state
    initialState: initialState,
    // set reducers (modify the state)
    reducers: {
        addMessage: add
    }
});


// export necessary data
export const { addMessage} = messagerSlice.actions;
export default messagerSlice.reducer;
