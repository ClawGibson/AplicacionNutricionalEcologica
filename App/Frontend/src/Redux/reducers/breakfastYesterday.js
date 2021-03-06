import {
    ADD_TO_BREAKFAST_YESTERDAY
} from '../Constants'

const initialState = []

const breakfastYesterday = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BREAKFAST_YESTERDAY:
            return [...state, action.payload]
    }
    return state
}

export default breakfastYesterday
