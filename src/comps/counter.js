import React, { Component } from 'react'

export default class Counter extends Component {

    divStyle = {
        background: "yellow",
        padding: "16px"
    }
    // counter = 44;
    state = { counter: 33, user: "koko" }

    add1 = () => {
        // this.counter++;
        // this.forceUpdate();
        // עדכון מאפיין בסטייט
        this.setState({counter:this.state.counter + 1})
        // יש לשים לב במיוחד בתנאים שהסטייט לא מתעדכן
        // באותו רגע ולוקח איזה עשרית שניה
        // ולכן בתנאי מומלץ להכניס את הפעולה המתמטית
        // או השינוי שביצענו בתוך האיף
        if(this.state.counter+1 >= 40){
          this.setState({user:"jack"});
        }
      }
    
    render() {
        // <div style="backgournd:skyblue">
        // <div style={{background:"skyblue",padding:"8px"}}>
        return (
            <div style={this.divStyle}>
                <h2>Counter:{this.state.counter}</h2>
                < button onClick={this.add1}>Add 1 {this.state.user}</button>
            </div>
        )
    }
}
