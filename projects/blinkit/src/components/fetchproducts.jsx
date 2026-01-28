import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { CustomSpinner } from "./Customspinner";
import useFetch from "./customhooks.jsx";

import { useSelector, useDispatch } from 'react-redux'
import { increment } from "../blinkitproducts/recipes";


function FetchProducts(){
  const dispatch = useDispatch()
  const k=useSelector((state)=>state)
  console.log(k)
  
  const {data,loading}=useFetch("https://dummyjson.com/recipes")
  
  return(<div style={{display:"flex",flexWrap:"wrap"}}>
    {data?.recipes?.length>0 ? data.recipes.map(item=><div style={{display:"flex",flexDirection:"column",width:"250px"}}><Link to={`/recipe/${item.id}`}><img src={item.image} style={{width:"250px"}}/></Link> <button  onClick={() => dispatch(increment(item))}>add to Cart</button></div>):<CustomSpinner/>}
  </div>)
}
export default FetchProducts