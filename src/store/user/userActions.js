import { GET_BDAYZ, ADD_BDAY, REMOVE_BDAY, CLEAR_BDAYZ } from "./userTypes"

export const getBdayz = (bdayz) => {
    return {
        type: GET_BDAYZ,
        payload: bdayz
    }
}
export const addBday = (bday) => {
    return {
        type: ADD_BDAY,
        payload: bday
    }
}

export const removeBday = (bdayId) => {
    return {
        type: REMOVE_BDAY,
        payload: bdayId
    }
}
export const clearBdayz = () => {
    return {
        type: CLEAR_BDAYZ
    }
}