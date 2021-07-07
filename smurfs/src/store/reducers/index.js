import { combineReducers } from 'redux'

import {FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_START, FETCH_SMURF_FAIL, 
    FORM_CHANGE, POST_SMURF_SUCCESS,
    POST_SMURF_FAIL} from '../actions'

const initialState = {
    isLoading: false,
    smurfs:[],
    error:'',
}

const initialSmurfForm = {
    name:'',
    height:'',
    age:'',
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading:true,
                error:''
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs:action.payload
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isLoading: false,
                error:action.payload
            }
        default:
            return state
    }
}

const formReducer = (state = initialSmurfForm, action) => {
    switch(action.type) {
        case FORM_CHANGE:
            return {...state,
                [action.payload.name]:action.payload.value
            }
        case POST_SMURF_SUCCESS:
            return initialSmurfForm
        case POST_SMURF_FAIL:
            return {...initialSmurfForm, error:action.payload}
        default:
            return state
    }
}

export default combineReducers({
    smurfReducer,
    formReducer
})