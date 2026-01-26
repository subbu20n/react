// class based component : we did not use "this" when we creating the component 
// we need to use "this" when we at the time of excution  we can access "this"  in classbased components 

import React from "react" 

class CounterApp extends React.Component{ 
    state = {
        count:0 
    }

  increment = () => {
    console.log("increment btn is triggered")
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }
    render() {
        return (
            <div style={{margin:"10%"}}>
                   <div>CounterApp</div> 
                <div style={{display:"flex"}}>
                    <button onClick={this.decrement}>decrement</button> 
                    <p>count:{this.state.count}</p> 
                    <button onClick={this.increment}>increment</button>
                    
                    </div> 
            </div>
          
        )
    }
}
export default CounterApp  