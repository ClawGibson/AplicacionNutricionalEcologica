import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cart from './reducers/cart'
import water from './reducers/water'
import timeReducer from './reducers/timeReducer'

const reducers = combineReducers({
    cart: cart,
    timeReducer: timeReducer,
    water: water
})

const Store = createStore(
    reducers,
    applyMiddleware(thunk),
    composeWithDevTools()
)

export default Store;