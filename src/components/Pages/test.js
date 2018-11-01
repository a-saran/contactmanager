import React, { Component } from 'react'

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            ob: true
        }
    }


    componentDidMount() {
        console.log("ComponentDidMount");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    render() {
        console.log("render");

        return (
            <div>
                <h1>test Component</h1>
            </div>
        )
    }
}
