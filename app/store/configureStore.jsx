import * as redux from 'redux';
import thunk from 'redux-thunk';

import {articlesReducer, loadStatusReducer, filterByNewestReducer} from '../reducers';

let configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        news: articlesReducer,
        loadStatus: loadStatusReducer,
        filterByNewest: filterByNewestReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension(): f => f
    ));

    return store;
};

export {configure}