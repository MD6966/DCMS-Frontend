import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './adminReducers'
import userReducer from'./userReducer'
const rootReducer = combineReducers({
    admin: adminReducer,
    user:userReducer

    
})

export default rootReducer