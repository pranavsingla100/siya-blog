import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.mjs'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})
