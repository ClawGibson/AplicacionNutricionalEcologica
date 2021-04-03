import {
    ADD_WATER
} from '../Constants'

export const addWater = (payload) => {
    return {
        type: ADD_WATER,
        payload
    }
}