// -----conditional rendering----componentDIDMount--&--Constructor -------------

// ---conditional rendering----- 

// 1.if else | 2.terenary operator | short circuit(logical operator) 
// condition?"yes":"no"
// condition&&"yes"  (syntax) 

//------------vdom------------
//diff: it is used to compare previous vdom and present vdom 
// reconcilation: the particular chnage is updated in the real dom (browser) 

// -----------component lifecycles-------------
// born      mounting 
// survive   updating 
// expire    unmounting   // classbaesd and functionalbased components are available 

// mounting: render | constructor | component DidMount | getDerivedstateFrom Props 
// updating:  shouldcomponentUpdate | getsnapshotforUpdate | componentDidUpdate 
// unMounting: componentWillUnmount 

//constructor: we can access in creating time also and execution time also  
//componentDidMount: it will trigger only once  
// componentWillUnmount: it will trigger when component is unmounted 
// getsnapshotBeforeUpdate: do you want previous count it will give  

// --------------axios----------
// axios we can use for better code writing organized code  ok 
// try catch (error will handle) async await .then .catch reagrading this 'axios id better

import React from "react"
import Customnavbar from "./components/customNavbar"
import CustomCoursel from "./components/customCarousel"
import { CustomSpinner } from "./components/customSpinner"
import axios from 'axios'
class Application extends React.Component{
    constructor(){
        super()
        this.state={
            recipes:[]
        } 
    }

    fetchrecipes=async()=>{
      try{
         let response= await axios.get('https://dummyjson.com/recipes')
         console.log(response.data.recipes)
         this.setState({recipes:response.data.recipes})
      }catch(err){
        console.log("my error :",err)
      }
       
    }
    componentDidMount(){
      this.fetchrecipes()
    }
render(){
    return(<>
    <Customnavbar/>
    <CustomCoursel/>
    {this.state.recipes.length>0?<>
    {this.state.recipes.map(each=><img src={each.image} style={{width:"300px"}}/>)}
    
    </>:<CustomSpinner/>}
    </>)
}
}
export default Application 