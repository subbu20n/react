

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomNavbar from './customNavbar'
import { decrement, increment } from '../blinkitproducts/recipes'


export function Cart() {
  const recipes = useSelector((state) => state.fresh_recipes.recipes)
  console.log(recipes)
  const dispatch = useDispatch()

  return (
    <div > 
        <CustomNavbar/>
    <div style={{textAlign:"center",marginTop:"5%"}}>
        {recipes.map(e=><div><img src={e.image} style={{width:"50px"}}/>
        <div style={{display:"flex",justifyContent:"center"}}><button onClick={()=>dispatch(decrement(e))}>-</button><h1>{e.count}</h1><button onClick={()=>dispatch(increment(e))}>+</button></div>
        
        </div>)}
    </div>
    </div>
  )
}