import {combineReducers} from 'redux'
import test from './testReducer'
import estrenos from './estrenosReducer'
import proximos_estrenos from './proximosEstrenosReducer'

export default combineReducers({
    // test:test ES5-
    test, //ES6
    estrenos, 
    proximos_estrenos
})