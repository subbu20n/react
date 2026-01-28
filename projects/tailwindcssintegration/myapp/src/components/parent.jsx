// ------------------Prop drilling------------
// parent -->child----> subchild  
// parent: if parent pass to 'child' --> child did not passed to subchild  it stops here only 'subchild' show undefined  
// for better results we went to  'context api global state management' 

// ----------------------context api (global state management)---------------  

// const firstcontext=createcontext()  // create  
// <first context>val{}</first context> // provider  
// use context.consumer()   // consumer  


import Child from "./child"


function Parent(props){ 
    console.log(props.snacks)  // parent has to recieve the snacks 
    return (
     
        <h1>
           <Child /> 
        </h1>

    )
} 
export default Parent  

