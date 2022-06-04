import {BUY_CAKE} from "./CakeTypes";
import {ADD_CAKE} from "./CakeTypes";

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const addCake = (pieces) => {
    return {
        type: ADD_CAKE,
        pieces: pieces
    }
}