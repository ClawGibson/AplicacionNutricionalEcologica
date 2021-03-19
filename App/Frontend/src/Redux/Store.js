import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import regItems from './reducers/regItems'
import timeReducer from './reducers/timeReducer'

const reducers = combineReducers({
    regitems: regItems,
    timeReducer: timeReducer
})

const Store = createStore(
    reducers,
    composeWithDevTools()
)

export default Store;