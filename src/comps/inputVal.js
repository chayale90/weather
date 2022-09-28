import React, { Component } from 'react'

export default class InputVal extends Component {

    state = { color: "silver" }

    inputRef = React.createRef()

    changeColor = () => {
        console.log(this.inputRef.current.value);
        let inputVal = this.inputRef.current.value
        this.setState({ color:inputVal})
    }

    render() {
        return <div className='p-2' style={{ background: this.state.color }}>
            <h2>Enter your favorite color: {this.state.color}</h2>
            <input onInput={this.changeColor} ref={this.inputRef} type="text" />
            <button onClick={this.changeColor}>Change color</button>
            <img src="/images/logo_new.png" width="200"/>
        </div>

    }
}
