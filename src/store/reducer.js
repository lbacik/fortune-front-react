
import * as actionTypes from './actions'

const initialState = {
    fortune: {
        fortune: undefined,
        file: undefined,
        index: undefined,
    },
    explorerShow: false,
    explorer: {
        path: '',
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SHOW_FILE:
            return {
                ...state,
                explorerShow: true,
                explorer: {
                    path: action.file,
                }
            }
        case actionTypes.UNSET_EXPLORER:
            return {
                ...state,
                explorer: {
                    path: undefined,
                    index: undefined,
                }
            }
        case actionTypes.SET_FORTUNE:
            return {
                ...state,
                fortune: {
                    fortune: action.payload.fortune,
                    file: action.payload.file,
                    index: action.payload.index,
                }
            }
        case actionTypes.EXPLORER_TOGGLE:
            return {
                ...state,
                explorerShow: ! state.explorerShow,
            }
        case actionTypes.CHANGE_EXPLORER_PATH:
            return {
                ...state,
                explorer: {
                    path: action.path,
                }
            }
    }

    return state;
}

export default reducer
