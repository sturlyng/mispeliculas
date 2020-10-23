import tipos from '../actions/tipo'

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tipos.GET_CREDITOS_FULFILLED:
            return Object.assign({}, state, {
                data: action.payload.data.cast
            })
        default:
            return state;
    }
}