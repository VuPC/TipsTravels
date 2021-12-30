import { SET_SELECT_CATEGORIES, SET_OPACITY_CATEGORIES, SET_LIST_CATEGORIES } from "./action"

let initalState = {
    stateCategories: {
        listSelectCategories: [],
    },
    listCategories: [],
    isOpacityCategory: false,
}

function categoryReducer(state = initalState, action) {
    let newState = {...state};

    switch (action.type) {
        case SET_SELECT_CATEGORIES:
            newState.stateCategories = {
                listSelectCategories: action.payload
            }
            return newState;
        case SET_OPACITY_CATEGORIES:
            return {
                ...state,
                isOpacityCategory: action.payload
            };
        case SET_LIST_CATEGORIES:
            return {
                ...state,
                listCategories: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer;