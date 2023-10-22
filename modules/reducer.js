import { getState } from "./store.js";
import { increaseValue, decreaseValue } from "./actions.js"; 

export const reducer = (state,action) => {

    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                value: state.value + 1
            }
            break;
        case 'SUBTRACT':
            return {
                ...state,
                value: state.value - 1
            }
            break;
        case 'RESET':
            return {
                ...state,
                value: 0
            }
            break;
        default: 
            return state
    }
}