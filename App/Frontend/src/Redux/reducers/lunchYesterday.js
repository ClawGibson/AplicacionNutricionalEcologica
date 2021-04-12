import {
    ADD_TO_LUNCH_YESTERDAY
} from '../Constants'

const initialState = []

const lunchYesterday = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LUNCH_YESTERDAY:
            return [...state, action.payload]
    }
    return state
}

export default lunchYesterday