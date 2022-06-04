import React from 'react';
import {buyCake} from "../redux/cake/CakeActions";
import {addCake} from "../redux/cake/CakeActions";
import {connect} from "react-redux";

function CakeContainer(props) {
    const handleAddCake = (pieces = 1) => {
        props.addCake(pieces);
    }

    return (
        <div>
            <h2>Number of Cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={() => {
                handleAddCake()
            }}>Add One Cake</button>
            <button onClick={() => {
                handleAddCake(5)
            }}>Add Five Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: (pieces) => dispatch(addCake(pieces)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);