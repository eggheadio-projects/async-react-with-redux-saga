import { call, take, put, select, throttle, fork, spawn, cancel } from 'redux-saga/effects'
import * as TYPES from '../types'

const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
})

/*
Throttle
function* handleInput(input) {

}

function* watchInput(){
    yield throttle(500, 'INPUT CHANGED', handleInput)
}
*/

export const cancelRequest = () => ({
    type: TYPES.CANCELLED
})

export function* fetchPerson(action) {
    try {
                             // fork 
        // const dogs   = yield spawn(api, 'https://dog.ceo/api/breeds/list/all')
        const person = yield call(api, 'https://swapi.co/api/people/')
        yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results})
        const selector = yield select(state => state.starWars)
        console.log(selector)
        // For spawn or fork tasks
        // yield take('CANCELLED')
        // yield cancel(dogs)
    } catch (e) {
        console.log(e)
    }
}