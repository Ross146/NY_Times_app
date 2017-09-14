import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter.jsx';

let store = require('./store/configureStore.jsx').configure();

import './styles/app.scss'

render(
    <Provider store={store}>
        <HashRouter>
            <AppRouter/>
        </HashRouter>
    </Provider>,
    document.querySelector('#app_container')
);
