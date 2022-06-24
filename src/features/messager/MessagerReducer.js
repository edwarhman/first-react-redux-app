const Redux = require("redux");

//type constant
const ADD = "ADD";

// add message action
export const addMessage = (message)=> {
    return {
        type: ADD,
        message: message
    }
}

// Redux reducer (must to set an initial state)
export const messagerReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.message];
        default:
            return state;
    }
}
