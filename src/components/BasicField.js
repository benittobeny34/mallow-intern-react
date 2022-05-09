import React, {Component} from 'react';
import AgeCalculation from "./AgeCalculation";

class BasicField extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            dob: '',
        }
    }

    handleNameChange = (e) => {
        this.setState({
            'name': e.target.value
        });
    }
    handleDOBChange = (e) => {
        this.setState({
            'dob': e.target.value
        });
    }

    render() {
        return (
            <div className="flex justify-center  flex-col mx-auto w-1/4">
                <p>Enter Your Name</p>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    className="p-2 border rounded-xl border-gray-300"/>
                <p>Enter Your DOB</p>
                <input
                    type="date"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.handleDOBChange}
                    className="p-2 border rounded-xl border-gray-300"/>
                <AgeCalculation name={this.state.name} dob={this.state.dob}/>
            </div>
        )
    }

}

export default BasicField;