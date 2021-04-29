import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cart from './reducers/cart'
import water from './reducers/water'
import timeReducer from './reducers/timeReducer'
import breakfastYesterday from './reducers/breakfastYesterday'
import collation1Yesterday from './reducers/collation1Yesterday'
import collation2Yesterday from './reducers/collation2Yesterday'
import lunchYesterday from './reducers/lunchYesterday'
import dinnerYesterday from './reducers/dinnerYesterday'
import newMenu from './reducers/newMenu'

const reducers = combineReducers({
    cart: cart,
    timeReducer: timeReducer,
    water: water,
    newMenu: newMenu,
    breakfastYesterday: breakfastYesterday,
    collation1Yesterday: collation1Yesterday,
    collation2Yesterday: collation2Yesterday,
    lunchYesterday: lunchYesterday,
    dinnerYesterday: dinnerYesterday
})

const Store = createStore(
    reducers,
    applyMiddleware(thunk),
    composeWithDevTools()
)

export default Store;