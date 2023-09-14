import { createStore } from "redux"
import { applyMiddleware } from "redux"
import ThunkMiddleware from "redux-thunk"
import { httpsService } from "../services/https.service"


const initalState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//REDUCERS  
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }
}
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        httpsService.getAll()
            .then(res => {
                dispatch(fetchUsersSuccess(res.data.users))
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.message))
            })
    }
}
const store = createStore(reducer, applyMiddleware(ThunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())