import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes: [],
}

export const RecipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    increment: (state,arg) => {
        console.log(arg.payload.id)
      const existing_Item=state.recipes.find(e=>e.id==arg.payload.id)
      
      if(existing_Item){
         state.recipes.map((e,index)=>{
            if(e.id==existing_Item.id){
                state.recipes[index]={...existing_Item,count:existing_Item.count+1}
            }
         })
      }else{
        state.recipes.push({...arg.payload,count:1})
       
      }
    },
    decrement: (state,arg) => {
        const existing_Item=state.recipes.find(e=>e.id==arg.payload.id)
      
      if(existing_Item){
         
         state.recipes.map((e,index)=>{
           
            if(e.id==existing_Item.id && existing_Item.count==1){
              
             state.recipes.splice(index,1)
             console.log("deleted")
            
            }else if(e.id==existing_Item.id){
                state.recipes[index]={...existing_Item,count:existing_Item.count-1}
            }
         })
      }
    },
  
  },
})


export const { increment, decrement } = RecipeSlice.actions

export default RecipeSlice.reducer