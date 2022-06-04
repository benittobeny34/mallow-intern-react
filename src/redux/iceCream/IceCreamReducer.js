import {BUY_ICE_CREAM} from "./IceCreamTypes";

const initialIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.pieces
            }
        default:
            return state
    }
}

export default iceCreamReducer;