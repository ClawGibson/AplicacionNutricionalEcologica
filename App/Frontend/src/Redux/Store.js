import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cart from './reducers/cart'
import water from './reducers/water'
import timeReducer from './reducers/timeReducer'
import cartYesterday from './reducers/cartYesterday'

const reducers = combineReducers({
    cart: cart,
    timeReducer: timeReducer,
    water: water,
    cartYesterday: cartYesterday
})

const Store = createStore(
    reducers,
    applyMiddleware(thunk),
    composeWithDevTools()
)

export default Store;