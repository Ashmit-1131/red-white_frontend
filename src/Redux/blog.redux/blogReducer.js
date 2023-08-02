import {
    POST_ADD_SUCCESS,
    POST_FUNC_ERROR,
    POST_FUNC_LOADING,
    POST_DELETE_SUCCESS,
    POST_UPDATED_SUCCESS,
    POST_GET_SUCCESS,
    ALLPOST_GET_SUCCESS
  } from "./blogTypes";
  
  const initialState={
      data : [],
      loading: false,
      count: 0,
      error:false,
      allCount : 0,
      allData : [],
   }
   
   export const PostReducer=(state=initialState,{type, payload})=>{
      switch(type){
       default : {
           return state
       }
       case POST_GET_SUCCESS:{
           return {
               ...state,
               data : payload.da,
               count : payload.c
           }
       }

       case ALLPOST_GET_SUCCESS:{
         return {
             ...state,
             allData : payload.da,
             allCount : payload.c
         }
     }
       case POST_FUNC_ERROR:{
           return {
               ...state,
               data : [],
               error : true,
           }
       }
       case  POST_FUNC_LOADING : {
           return {
               ...state,
               data : [],
               loading : true,
           }
       }
  
       case POST_ADD_SUCCESS : {
          return {
              ...state,
              data : [...state.data,payload],
              error: false,
              loading : false,
          }
       }
  
       case POST_UPDATED_SUCCESS : {
          let filtered = state.data.map((el)=>{
              if(el._id===payload._id){
                  return payload;
              }
              return el;
          })
          return {
              ...state,
              data : filtered,
          }
       }
  
       case POST_DELETE_SUCCESS :{
          let filtered = state.data.map((el)=>{
              if(el._id===payload._id){
                  return
              }
              return el;
          })
          return {
              ...state,
              data : filtered,
          }
       }
      }
   }