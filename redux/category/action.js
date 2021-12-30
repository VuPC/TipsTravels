export const SET_SELECT_CATEGORIES = 'SET_SELECT_CATEGORIES'
export const SET_OPACITY_CATEGORIES = 'SET_OPACITY_CATEGORIES'
export const SET_LIST_CATEGORIES = 'SET_LIST_CATEGORIES'

export const setSelectCategory = listSelectCate => dispatch => {
    dispatch({
        type: SET_SELECT_CATEGORIES,
        payload: listSelectCate
    })
}

export const setOpacityCategory = isOpacity => dispatch => {
    dispatch({
        type: SET_OPACITY_CATEGORIES,
        payload: isOpacity
    })
}

export const setListCategory = listCate => dispatch => {
    dispatch({
        type: SET_LIST_CATEGORIES,
        payload: listCate
    })
}