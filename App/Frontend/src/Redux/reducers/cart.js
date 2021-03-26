import {
    ADD_TO_BREAKFAST,
    REMOVE_FROM_BREAKFAST
} from '../Constants'

const cart = (initialState = [], action) => {
    switch (action.type) {
        case ADD_TO_BREAKFAST:
            return [...initialState, action.payload]

        case REMOVE_FROM_BREAKFAST:
            return initialState.filter(item => item != action.payload)
    }
    return initialState
}

export default cart