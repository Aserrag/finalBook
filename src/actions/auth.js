import{
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,

    LOGIN_USER_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from"./types";
import axios from"axios";

export const load_user=()=> async dispatch =>{
    if(localStorage.getItem('access')){
        const config={
            headers:{
            'Content-Type' : 'application/json',
            "Authorization": `JWT ${localStorage.getItem('access')}`,
            'Accept':'application/json'
            }
        
    }
    try{
        const res=await axios.get(`https://movieproject0001.pythonanywhere.com/auth/users/me/`,config);
        dispatch({
            type:USER_LOADED_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type:LOGIN_USER_FAIL,
            
        })
    }
}
};


export const login=(username,password)=>async dispatch=>{

    const config={
        headers:{
        'Content-Type' : 'application/json'
            
        }
    }
    const body=JSON.stringify({username,password});

    try{
        const res=await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create`,body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
            
        })
        dispatch(load_user());
    }catch(err){
        dispatch({
            type:LOGIN_FAIL,
            
        })
    }
};

export const signup=(username,email,password,re_password)=>async dispatch=>{

    const config={
        headers:{
        'Content-Type' : 'application/json'
            
        }
    }
    const body=JSON.stringify({username,email,password,re_password});

    try{
        const res=await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`,body,config);
        dispatch({
            type:SIGNUP_SUCCESS,
            payload: res.data
            
        })
        
    }catch(err){
        dispatch({
            type:SIGNUP_FAIL,
            
        })
    }
};