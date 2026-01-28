import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../blinkitproducts/fruits'

export function Counter() {
  const {fresh_fruits:{fruits}} = useSelector((state) => state)
  
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment("mangoes"))}
        >
          Increment 
        </button>
        <h1>{fruits.mangoes}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement("mangoes"))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}