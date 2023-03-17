import React, { Component } from 'react';


class DaftarMinuman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist : this.props.list
        };
    }

    render() {
        return(
            <div>
                <img src={this.state.datalist} alt="product manakan" width="150" height="100"/>
            </div>
        );
    }
}

export default DaftarMinuman;