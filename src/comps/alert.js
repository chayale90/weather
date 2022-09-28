import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <div style={{ background: this.props.bg, padding: "8px", border: "2px solid red" }}>
                <h3 >Alert</h3>
                <h2>Message: {this.props.txt}</h2>
            </div>
        )
    }
}
