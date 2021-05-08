import {
    ADD_TO_NEW_MENU,
    CLEAR_NEW_MENU
} from '../Constants'

const initialState = []

const newMenu = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_NEW_MENU:
            return [...state, action.payload]
        case CLEAR_NEW_MENU:
            return []
    }
    return state
}

export default newMenu