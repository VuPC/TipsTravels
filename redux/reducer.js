import { combineReducers } from 'redux'
import loginReducer from './auth/reducer'
import categoryReducer from './category/reducer'

const rootReducer = combineReducers({ 
    loginReducer: loginReducer, 
    categoryReducer: categoryReducer
})

export default rootReducer;