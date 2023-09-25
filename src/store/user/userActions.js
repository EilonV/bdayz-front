import { GET_BDAYZ, ADD_BDAY, REMOVE_BDAY} from "./userTypes"

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

export const removeBday = (bday) => {
    return {
        type: REMOVE_BDAY,
        payload: bday
    }
}