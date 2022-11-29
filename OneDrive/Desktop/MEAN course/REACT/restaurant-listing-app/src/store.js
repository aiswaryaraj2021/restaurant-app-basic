import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {restrntlistReducer} from './Reducers/restrntReducer'
//reducer
const reducers = combineReducers({
    restrntlistReducer:restrntlistReducer
})

//middleware:
const middleware = [thunk]

//store creation
const store = createStore(reducers,applyMiddleware(...middleware))

//EXPORT: for store to get accessed in entire file:
 

export default store