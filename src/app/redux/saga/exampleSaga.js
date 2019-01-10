import {take, put, all, call, fork} from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import request, {PUT, GET} from '../../services/request';
import constants from '../../constants';

export function *getUserSettings() {
    while (true) {
        try {
            yield take(actionTypes.ADMIN_SETTINGS_GET);
            yield put({type: actionTypes.ADMIN_SETTINGS_GET_PROGRESS});
            try {
                yield request(GET, constants.ADMIN_SETTINGS_GET_API_URI());
            } catch (e) {
                console.error('can\'t find user creating new');
                const userSettings = yield {
                    name: constants.ADMIN_SETTINGS_QUERY_PARAM(),
                    value: {},
                };
                yield request(PUT, constants.ADMIN_SETTINGS_ADD_API_URL(), userSettings);
            }
            const response = yield request(GET, constants.ADMIN_SETTINGS_GET_API_URI());
            yield put({type: actionTypes.ADMIN_SETTINGS_GET_SUCCESS, payload: response.data.value});
        } catch (e) {
            console.error(e);
            yield put({type: actionTypes.ADMIN_SETTINGS_GET_FAILED, error: e});
        }
    }
}

export function *changeUserSettings() {
    while (true) {
        try {
            const {payload} = yield take(actionTypes.ADMIN_SETTINGS_ADD);
            yield put({type: actionTypes.ADMIN_SETTINGS_ADD_PROGRESS});
            const userSettings = yield {
                name: constants.ADMIN_SETTINGS_QUERY_PARAM(),
                value: payload,
            };
            yield request(PUT, constants.ADMIN_SETTINGS_ADD_API_URL(), userSettings);
            yield put({type: actionTypes.ADMIN_SETTINGS_ADD_SUCCESS, payload: payload});
            yield put({type: actionTypes.ADMIN_SETTINGS_GET});
        } catch (e) {
            console.error(e);
            yield put({type: actionTypes.ADMIN_SETTINGS_GET_FAILED, error: e});
        }
    }
}


export default function *exampleSaga() {
    yield all([
        fork(getUserSettings),
        fork(changeUserSettings),
    ]);
}
