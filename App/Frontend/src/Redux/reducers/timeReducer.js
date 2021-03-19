import {
    ADD_TIME
} from '../Constants'

const timeReducer = (initialState = 0, action) => {
    switch (action.type) {
        case ADD_TIME:
            return initialState + action.payload
    }
    return initialState
}

export default timeReducer