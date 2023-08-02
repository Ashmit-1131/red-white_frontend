import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import {reducer as authReducer}  from './auth.redux/authReducer';





const rootReducer = combineReducers({

   authReducer,
 
 
});



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))