import React, { Component } from 'react'

export default class ChildComp extends Component {
  changeRed = () => {
    this.props.changeTextColor("red")
  }
  
  render() {
    return (
      <div>
        <button onClick={this.changeRed}>Red</button>
        {/* ניתן לקרוא לפונקציה אנונימית
        מאירוע בריאקט ואז לזמן פונקציה
        מהפרופס שצריך להעביר לה ארגיומנט 
        לפרמטר */}
        <button onClick={() => {
          this.props.changeTextColor("blue");
        }}>Blue</button>
        <button onClick={() => {
          this.props.changeTextColor("green");
        }}>Green</button>
      </div>
    )
  }
}
