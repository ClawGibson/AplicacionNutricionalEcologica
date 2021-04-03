import {
    ADD_TO_BREAKFAST_YESTERDAY,
    ADD_TO_COLLATION1_YESTERDAY,
    ADD_TO_LUNCH_YESTERDAY,
    ADD_TO_COLLATION2_YESTERDAY,
    ADD_TO_DINNER_YESTERDAY
} from '../Constants'

const initialState = []

const cartYesterday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_BREAKFAST_YESTERDAY:
            console.log('state:', state, " |  action.payload:", action.payload)
            return [...state, action.payload]
        case ADD_TO_COLLATION1_YESTERDAY:
            break;
        case ADD_TO_LUNCH_YESTERDAY:
            break;
        case ADD_TO_COLLATION2_YESTERDAY:
            break;
        case ADD_TO_DINNER_YESTERDAY:
            break;
    }

    return state

}

export default cartYesterday
