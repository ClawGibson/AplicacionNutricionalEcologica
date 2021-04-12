import {
    ADD_TO_COLLATION2_YESTERDAY
} from '../Constants'

const initialState = []

const collation2Yesterday = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_COLLATION2_YESTERDAY:
            return [...state, action.payload]
    }
    return state
}

export default collation2Yesterday