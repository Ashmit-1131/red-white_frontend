import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import {reducer as authReducer}  from './auth.redux/authReducer';
import { PostReducer } from './blog.redux/blogReducer';




const rootReducer = combineReducers({

   authReducer,
   PostReducer
 
 
});



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))