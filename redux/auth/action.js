export const SET_LOGIN = 'SET_LOGIN';
export const SET_NAME = 'SET_NAME';

export const setLogIn = isLogin => dispatch => {
    dispatch({
        type: SET_LOGIN,
        payload: isLogin
    })
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_NAME,
        payload: name
    })
}