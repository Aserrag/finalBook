/* eslint-disable no-fallthrough */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS
} from '../actions/types'

const initialState = {
    favorite: [],

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return {
                ...state,

                access: payload.access,
                refresh: payload.refresh
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null,
            }

        case SIGNUP_FAIL:

        case SIGNUP_SUCCESS:
            localStorage.setItem('signup',true)
            return{
                ...state,
                isAuthenticated: true,
            }





        default:
            return state;
    }
};