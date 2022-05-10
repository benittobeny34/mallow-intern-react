import React, {Component} from "react";

class AgeCalculation extends Component {
    constructor() {
        super();
        this.state = {
            age: 0,
        }
    }

    static getDerivedStateFromProps(props, state) {
        var age = new Date().getFullYear() - new Date(props.dob).getFullYear();
        age = age ? age : 0;
        return {
            age: age
        };
    }

    calculateAge() {
        if (!this.props?.dob) {
            return 0;
        }
        var age = new Date().getFullYear() - new Date(this.props.date).getFullYear();
        this.setState({
            age: age
        })
    }

    render() {
        const {name, dob} = this.props;
        const {age} = this.state;
        return (
            <div className="flex flex-col">
                <p>
                    Name: {name}
                </p>
                <p>
                    DOB: {dob}
                </p>
                <p>Age: {age}</p>
            </div>
        )
    }
}

export default AgeCalculation;