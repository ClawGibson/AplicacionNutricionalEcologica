import {
    ADD_TO_COLLATION1_YESTERDAY
} from '../Constants'

const initialState = []

const collation1Yesterday = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_COLLATION1_YESTERDAY:
            return [...state, action.payload]
    }
    return state
}

export default collation1Yesterday