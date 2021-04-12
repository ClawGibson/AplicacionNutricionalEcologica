import {
    ADD_TO_DINNER_YESTERDAY
} from '../Constants'

const initialState = []

const dinnerYesterday = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DINNER_YESTERDAY:
            return [...state, action.payload]
    }
    return state
}

export default dinnerYesterday