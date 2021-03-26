import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import cart from './reducers/cart'
import timeReducer from './reducers/timeReducer'

const reducers = combineReducers({
    cart: cart,
    timeReducer: timeReducer
})

const Store = createStore(
    reducers,
    composeWithDevTools()
)

export default Store;