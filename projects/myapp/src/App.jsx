// ------------fragment----list rendering----children props-----

//-------------Fragment---------------

// fragments: which is used to reduce extra frament 

// <React.Fragment></React.Fragment>
// <></>

// ----------------list rendering--------------

// list renering : map - to iterate each item means 'display' 

//key prop: which is used to uniquely identify the element in dom 
// props:  props are used to pass from parent component to child component  
// propsa are immutable , props are used to control the structure of ui 

// props are two types: 
// 1. general props 2. children props 

import React from "react"  



// function Items(props){
//   let fruits = ["apple","banana","kiwi"] 
//   return(
//     <>
//       {fruits.map(each=><li>{each}</li>)}  
//     </>
//   )
// }

// // ------------props ----------------

//  let fruits = ["apple","banana","kiwi"] 
// function Items(props){
//      console.log(props)
//   return(
//     <>
//       {props.fruits.map(each=><li>{each}</li>)}  
//     </>
//   )
// }

// -----destructing--------

//  let fruits = ["apple","banana","kiwi"] 
// function Items(props){
//      const {fruits} = props 
//   return(
//     <>
//       {fruits.map(each=><li>{each}</li>)}  
//     </>
//   )
// }

// -------key props---------------unique id 

//  let fruits = [{id:1,name:"apple"},{id:2,name:"kiwi"},{id:3,name:"kiwi"}]
// function Items(props){
//      const {fruits} = props 
//   return(
//     <>
//       {fruits.map(each=><li key={each.id}>{each.name}</li>)}  
//     </>
//   ) 
// }

// -------------------children props-------------------- 

//import React from "react" 

let fruits = [{id:1,name:"apple"},{id:2,name:"kiwi"},{id:3,name:"kiwi"}]
function Items(props){
     //console.log(props.children)
     let {children}=props
  return(
    <>
      {children.map(each=><li key={each.id}>{each.name}</li>)}  
    </>
  ) 
}
 
function UnorderList(){
  return(
    <ul>
       <Items>
          {fruits} 
      </Items>
    </ul>
  )
}

function OrderList(){
  return (
    <ol>
      <Items>
          {fruits} 
      </Items>
    </ol>
  )
}

function App(){
  let name="user1" 
  return (
    <div>
      <h1>hello react {name}</h1> 
      <UnorderList/> 
      <OrderList/> 
    </div>
  )
}
export default App   