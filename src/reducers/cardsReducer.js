import {
    CARDS_GET_LIST,
    CARDS_GET_DETAILS
} from '../actions/constants';


const initState = {
    serverTotal: 0,
    list: [],
    selected: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case CARDS_GET_LIST:
            return { ...state, list: action.payload.list, serverTotal: action.payload.serverTotal, selected: {} }
        case CARDS_GET_DETAILS:
            return {...state, selected: action.payload}
        default:
            return state
    }
};