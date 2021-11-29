import React, { Component } from 'react'

export default class ClassComp2 extends Component {
    constructor() {
        super();
        this.cakes = ['Strawberry,Black Forest','Cheese Cake']
    }
    vegetables=['Tomato','Onion',"potato"]
    render() {
        let fruits = ["apple",'orange','grapes']
        return (
            <div>
                <h1>ClassComp Ex-2</h1>
                <h2>List of fruits</h2>
                <ol>
                    {fruits.map(x=> <li>{x}</li>)}
                </ol>
                <h2>List of Vegetables</h2>
                <ul>
                    {this.vegetables.map(x=> <li>{x}</li>)}
                </ul>
                <h2>List of Cakes</h2>
                <ul>
                    {this.cakes.map(x=> <li>{x}</li>)}
                </ul>
            </div>
        )
    }
}
