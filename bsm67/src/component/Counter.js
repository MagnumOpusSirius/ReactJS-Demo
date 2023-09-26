import React, { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {count:0};
    }
    increment(){
        //this.setState({count:this.state.count++});
        this.setState((prevState)=>({count:prevState.count+1}));
        // console.log("Increment");
        
    }
    incrementThree=()=>{
        this.increment();
    }
    render(){
        return(
            <div>
                <h1>Count = {this.state.count}</h1>
                <button onClick={()=>this.incrementThree()}>Increment</button>
            </div>
        );
    }
    
}

export default Counter;