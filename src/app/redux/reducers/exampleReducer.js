import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    userSettings: {
    },
    spinner: true,
    failedFetch: false,
};

const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_SETTINGS_GET_PROGRESS: {
            return {
                ...state,
                spinner: true,
            };
        }
        case actionTypes.ADMIN_SETTINGS_GET_SUCCESS: {
            return {
                ...state,
                userSettings: action.payload,
                failedFetch: false,
                spinner: false,
            };
        }
        case actionTypes.ADMIN_SETTINGS_GET_FAILED: {
            return {
                ...state,
                userSettings: action.payload,
                failedFetch: true,
                spinner: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
