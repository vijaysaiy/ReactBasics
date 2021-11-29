import React, { Component } from 'react'

export default class ClassComp3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let msg = this.props.msg;
        return (
            <div>
                <h1>Class Comp Ex-3</h1>
                <h2>Props Demo</h2>
                <h3>Msg:{msg}</h3>
            </div>
        )
    }
}
