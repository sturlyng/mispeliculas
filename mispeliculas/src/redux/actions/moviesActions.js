import tipos from './tipo'
import axios from 'axios'

const urlBase = 'https://api.themoviedb.org/3/movie/'
const key = '57ce088c0844a8eda6c1e58f3397757c'

export const getEstrenos = () => dispatch => {
    dispatch({
        type: tipos.GET_ESTRENOS,
        payload: axios.get(`${urlBase}now_playing?api_key=${key}&language=es`)
    })
}