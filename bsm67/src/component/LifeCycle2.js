import React, {Component} from "react";

class LifeCycle2 extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Ryan'
        }
        console.log('LifeCycle 2 Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle2 getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('LifeCycle2 componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycle2 shouldcomponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle2 getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(prevProps,prevState, snapshot ){
        console.log('Lifecycle2 ComponentDidUpdate')
    }

    render(){
        console.log('LifeCycle2 render')
        return(
            <div>
                LifeCycle 2
            </div>
        )
    }
}

export default LifeCycle2