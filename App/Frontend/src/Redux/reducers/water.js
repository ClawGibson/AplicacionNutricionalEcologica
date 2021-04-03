import {
    ADD_WATER
} from '../Constants'

const initialState = 0

const waterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WATER:
            return Number(Number(state) + Number(action.payload))
        default:
            return state
    }
}

export default waterReducer