import {
    ADD_TO_BREAKFAST_YESTERDAY,
    ADD_TO_COLLATION1_YESTERDAY,
    ADD_TO_COLLATION2_YESTERDAY,
    ADD_TO_LUNCH_YESTERDAY,
    ADD_TO_DINNER_YESTERDAY
} from '../Constants'

export const addToBreakfastYesterday = (payload) => {
    return {
        type: ADD_TO_BREAKFAST_YESTERDAY,
        payload
    }
}

export const addToCollation1Yesterday = (payload) => {
    return {
        type: ADD_TO_COLLATION1_YESTERDAY,
        payload
    }
}

export const addToCollation2Yesterday = (payload) => {
    return {
        type: ADD_TO_COLLATION2_YESTERDAY,
        payload
    }
}

export const addToLunchYesterday = (payload) => {
    return {
        type: ADD_TO_LUNCH_YESTERDAY,
        payload
    }
}

export const addToDinnerYesterday = (payload) => {
    return {
        type: ADD_TO_DINNER_YESTERDAY,
        payload
    }
}
