import {combineReducers} from 'redux'
import test from './testReducer'
import estrenos from './estrenosReducer'

export default combineReducers({
    // test:test ES5-
    test, //ES6
    estrenos
})