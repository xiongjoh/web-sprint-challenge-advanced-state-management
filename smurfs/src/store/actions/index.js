import axios from 'axios'

// action types
export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL'

export const FORM_CHANGE = 'FORM_CHANGE'

export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL'

// action creator

export const fetchSmurf = () => {
    return(dispatch) => {
        dispatch({type:FETCH_SMURF_START})
        axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({type:FETCH_SMURF_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type:FETCH_SMURF_FAIL, payload:err.message})
        })
    }
}

export const changeForm = (event) => {
    return(dispatch) => {
        dispatch({type:FORM_CHANGE, payload:event.target})
    }
}

export const submitSmurf = (smurf) => {
    return(dispatch) => {
        axios.post(`http://localhost:3333/smurfs`, smurf)
        .then(res => {
            debugger
            console.log(res)
            dispatch({type:POST_SMURF_SUCCESS})
        })
        .catch(err => {
            console.log(err)
        })
    }
}
