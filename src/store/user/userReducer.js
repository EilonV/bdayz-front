import { GET_BDAYZ } from "./userTypes"

const initalState = {
    bdayz: []
}

const userReducuer = (state = initalState, action) => {
    switch (action.type) {
        case GET_BDAYZ: return {
            ...state,
            bdayz: action.payload
        }
        default: return state
    }
}
console.log(typeof initalState.bdayz);
export default userReducuer