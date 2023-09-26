import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: "Parent"
        };
        this.greetParent = this.greetParent.bind(this); // binding the method //is this necessary? //yes //why? //because we are using this keyword inside the method
    }
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }
    render() {
        return (
            <div>
                {this.props.data}
                <ChildComponent greetHandler={this.greetParent} />
                
            </div>
        );
    }
}

export default ParentComponent;