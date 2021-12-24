import { SET_LOGIN, SET_NAME } from './action'

const initalState = {
    auth: {
        isLogin: null,
        name: ''
    },
}

function loginReducer(state = initalState, action) {
    let newState = {...state};

    switch (action.type) {
        case SET_LOGIN:
            newState.auth = {
                isLogin: action.payload
            }
            return newState;
        case SET_NAME:
            newState.auth = {
                name: action.payload
            }
            return newState;
        default:
            return state;
    }
}

export default loginReducer;