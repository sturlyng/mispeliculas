import tipos from './tipo'
import axios from 'axios'
import tipo from './tipo'

const urlBase = 'https://api.themoviedb.org/3/movie/'
const urlBaseSearch = 'https://api.themoviedb.org/3/'
const key = '57ce088c0844a8eda6c1e58f3397757c'

export const getEstrenos = () => dispatch => {
    dispatch({
        type: tipos.GET_ESTRENOS,
        payload: axios.get(`${urlBase}now_playing?api_key=${key}&language=es`)
    })
}

export const getProximosEstrenos = () => dispatch => {
    dispatch({
        type: tipos.GET_PROXIMOS_ESTRENOS,
        payload: axios.get(`${urlBase}upcoming?api_key=${key}&language=es`)
    })
}

export const getCreditos = (peliculaid) => dispatch => {
    dispatch({
        type: tipos.GET_CREDITOS,
        payload: axios.get(`${urlBase}${peliculaid}/credits?api_key=${key}&language=es`)
    })
}

export const getPeliculaDetalle = (peliculaid) => dispatch => {
    dispatch({
        type: tipos.GET_PELICULA_DETALLE,
        payload: axios.get(`${urlBase}${peliculaid}?api_key=${key}&language=es`)
    })
}

export const getBusqueda = text => dispatch => {
    dispatch({
        type: tipos.GET_BUSQUEDA,
        payload: axios.get(`${urlBaseSearch}search/movie?query=${text}&api_key=${key}&language=es`)
    })
}

export const clearSearch = () => {
    return {
        type: tipo.CLEAR_SEARCH
    }
}