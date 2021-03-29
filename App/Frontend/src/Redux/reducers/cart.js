import update from 'immutability-helper';
import {
    ADD_TO_BREAKFAST,
    REMOVE_FROM_BREAKFAST,
    INCREASE_COUNT,
    DECREASE_COUNT
} from '../Constants'

const initialState = {
    data: []
}

const cart = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_BREAKFAST:
            return {
                ...state,
                data: [...state?.data, action.payload]
            }

        case INCREASE_COUNT:
            console.log(action);
            console.log(state);
            return update(state, {
                data: {
                    cantidad: { $set: state?.cantidad + 1 }
                }
            });

        case DECREASE_COUNT:
            return {
                ...state,
                data: {
                    cantidad: cantidad - 1
                }
            }

        case REMOVE_FROM_BREAKFAST:
            console.log("action.payload:", action.payload);
            const aiuda = state?.data?.filter(item => item.filter(i => console.log(i != action.payload)));
            console.log("aiuda:", aiuda);
            return aiuda

        default:
            return state
    }
    return state
}

export default cart