import {
    POST_ADD_SUCCESS,
POST_FUNC_ERROR,
POST_FUNC_LOADING,
POST_DELETE_SUCCESS,
POST_UPDATED_SUCCESS,
POST_GET_SUCCESS,
ALLPOST_GET_SUCCESS
} from "./blogTypes";
import axios from "axios";
const url = 'https://sore-teal-raven-ring.cyclic.cloud'
// const url = "http://localhost:8080"


export const getPost = (page=1) => async (dispatch) => {
    let token = sessionStorage.getItem('token');
    const config = {
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    };
    dispatch({ type: POST_FUNC_LOADING });
    try{
        let res =await axios.get(`${url}/blog?page=${page}`,config);
        let da = res.data.data;
        let c = res.data.count
        // console.log('action: ',res.data)
        dispatch({type:POST_GET_SUCCESS,payload:{da,c}})
    }catch(e){
        dispatch({type:POST_FUNC_ERROR,payload:e.message})
    }
}

export const getAllPost = (page=1) => async (dispatch) => {
    page=page-1
    let token = sessionStorage.getItem('token');
    const config = {
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    };
    dispatch({ type: POST_FUNC_LOADING });
    try{
        let res =await axios.get(`${url}/blog/userPost?page=${page}`,config);
        let da = res.data.data;
        let c = res.data.count
        // console.log('action: ',res.data)
        dispatch({type:ALLPOST_GET_SUCCESS,payload:{da,c}})
    }catch(e){
        dispatch({type:POST_FUNC_ERROR,payload:e.message})
    }
}

export const addPost = (data) =>async (dispatch) => {
    const headers={
        'Content-type': 'application/json',
        'tkn' : sessionStorage.getItem("token")
    }
     dispatch({ type: POST_FUNC_LOADING });
     console.log(1)
     try {
        const response = await fetch(`${url}/blog/add`, {
          method: 'POST',
          mode: 'cors',
          headers: headers,
          body: JSON.stringify(data),
        });
        console.log(2)
    console.log('ress',response)
        const responseData = await response.json();
        console.log('Response:', responseData);
         dispatch({type:POST_ADD_SUCCESS,payload:data})
         console.log(3)
      } catch (error) {
        console.error('Error:', error.message);
      }        
}

export const updatePost = (product) => async (dispatch) => {
    let token = sessionStorage.getItem('token');
    dispatch({ type: POST_FUNC_LOADING });
    console.log(product.id)
    fetch(`${url}/blog/${product.id}`, {
        method: 'PATCH',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    })
        .then(function (response) {
            response.json()
            dispatch({ type: POST_UPDATED_SUCCESS, payload: response })
        })
        .catch((err) => dispatch({ type: POST_FUNC_ERROR, payload: err.message }))
}

export const deletePost = (id) => async (dispatch) => {
    let token = sessionStorage.getItem('token');
    dispatch({ type: POST_FUNC_LOADING });
    fetch(`${url}/blog/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    })
        .then((res) => {
            res.json()
            dispatch({ type: POST_DELETE_SUCCESS, payload: res })
        })

        .catch((err) => dispatch({ type: POST_FUNC_ERROR, payload: err.message }))
}