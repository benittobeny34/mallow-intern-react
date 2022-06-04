import {BUY_CAKE} from "./CakeTypes";
import {ADD_CAKE} from "./CakeTypes";

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case ADD_CAKE:
            console.log(action);
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.pieces
            }
        default:
            return state
    }
}

export default cakeReducer;