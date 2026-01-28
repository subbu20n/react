import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fruits:{
    mangoes:100,
    oranges:300,
    grapes:700
  },
}

export const counterSlice = createSlice({
  name: 'Fruits',
  initialState,
  reducers: {
    increment:(state,a)=>{
      console.log(a.payload)
       if(a.payload=="mangoes"){
        state.fruits.mangoes+=1
       }
    },
    decrement: (state,a) => {
      if(a.payload=="mangoes"){
        state.fruits.mangoes-=1
      }
    },
   
  },
})
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer