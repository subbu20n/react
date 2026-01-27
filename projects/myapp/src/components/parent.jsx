// -------------deployment----useStateHook----taliwindcss-integration----stateless v/s statefull-----------

//-------------------pure component-------------- 
// purecomponent: unnecessary re rerendering wont do this  

import React from "react";
import Child from "./child";

class Parent extends React.Component {
  state = {
    count: 0
  };

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("parent is render");
    return (
      <>
        parent component {this.state.count}
        <button onClick={this.onIncrement}>+</button>
        <Child />
      </>
    );
  }
}

export default Parent;
