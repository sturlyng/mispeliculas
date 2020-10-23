import tipos from './tipo'

export const updateFecha = () => {
    return {
        type: tipos.UPDATE_FECHA,
        payload: new Date()
    }
}