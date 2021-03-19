import {
    ADD_TIME
} from '../Constants'

export const addTime = (payload) => {
    return {
        type: ADD_TIME,
        payload
    }
}
