import { useState, useEffect } from "react";
import CustomSpinner from "./customSpinner";
import { Link } from "react-router";



 export function FetchProducts(){
  const [recipes,setrecipes]=useState("") 
    useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(json_res => {
        console.log(json_res.recipes);
        setrecipes(json_res.recipes);
      });
      
  }, []); // run only once
  return (
    <>
      {recipes.length>0 && recipes.map(e=><Link to={`/recipes/${e.id}`}><img src={e.image} style={{width:"250px"}}/></Link>)}
    </>
  )
 } 