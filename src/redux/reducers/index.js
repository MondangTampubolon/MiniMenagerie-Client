import { combineReducers } from 'redux'

import { addToCartReducer } from './addToCartReducer'

const rootReducer = combineReducers({
    addToCart: addToCartReducer
})

export default rootReducer