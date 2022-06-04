import React from "react";
import {buyIceCream} from "../redux/iceCream/IceCreamActions";
import {connect} from "react-redux";

function iceCreamContainer(props) {
    return (
        <div>
            <h2>No of Ice Creams - {props.numOfIceCreams} </h2>
            <button onClick={() => {
                props.buyIceCream(5)
            }}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: (pieces = 1) => dispatch(buyIceCream(pieces))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)