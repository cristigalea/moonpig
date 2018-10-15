import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cardsReducer from './reducers/cardsReducer';
import layoutReducer from './reducers/layoutReducer';

const reducer = combineReducers({
    cards: cardsReducer,
    layout: layoutReducer
});

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);