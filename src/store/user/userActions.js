import { GET_BDAYZ } from "./userTypes"

export const getBdayz = (bdayz) => {
    return {
        type: GET_BDAYZ,
        payload: bdayz
    }
}