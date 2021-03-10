import {
    ADD_TO_REG,
    REMOVE_FROM_REG
} from '../Constants'

const regItems = (initialState = [], action) => {
    switch (action.type) {
        case ADD_TO_REG:
            return [...initialState, action.payload]

        case REMOVE_FROM_REG:
            return initialState.filter(regItem => regItem != action.payload)
    }
    return initialState
}

export default regItems