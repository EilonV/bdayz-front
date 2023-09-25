import { GET_BDAYZ, ADD_BDAY, REMOVE_BDAY } from "./userTypes"

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
            const updatedBdayz = state.bdayz.filter((bday) => bday.id !== action.payload)
            console.log(updatedBdayz);
            return {
                ...state,
                bdayz: updatedBdayz,
            }
        default: return state
    }
}

export default userReducuer