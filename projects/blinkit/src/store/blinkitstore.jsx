import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../blinkitproducts/fruits'
import { RecipeSlice } from '../blinkitproducts/recipes'

export const store = configureStore({
  reducer: {
    fresh_fruits : counterSlice.reducer,
    fresh_recipes : RecipeSlice.reducer
  },
})