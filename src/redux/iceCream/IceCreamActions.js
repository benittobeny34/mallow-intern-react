import {BUY_ICE_CREAM} from "./IceCreamTypes";

export const buyIceCream = (pieces) =>  {
    return {
        type: BUY_ICE_CREAM,
        pieces: pieces
    }
}