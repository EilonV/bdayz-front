import { GET_BDAYZ, ADD_BDAY, REMOVE_BDAY, CLEAR_BDAYZ } from "./userTypes"

const initalState = {
    bdayz: []
}
console.log(initalState);
const userReducuer = (state = initalState, action) => {
    switch (action.type) {
        case GET_BDAYZ: return {
            ...state,
            bdayz: action.payload
        }
        case ADD_BDAY: return {
            ...state,
            bdayz: [...state.bdayz, action.payload],
        }
        case REMOVE_BDAY:
            const index = state.bdayz.findIndex((index) => index.bdayId === action.payload)
            const newBdayz = [
                ...state.bdayz.slice(0, index),
                ...state.bdayz.slice(index + 1),
            ];
            return {
                ...state,
                bdayz: newBdayz
            }
        case CLEAR_BDAYZ:

            return {
                ...state,
                bdayz: []
            }
        default: return state
    }
}

export default userReducuer