import css from './app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import routes from './routes';

const history = createHistory();
const store = createStore(reducers, applyMiddleware(thunk, routerMiddleware(history)));
let routing = routes;

function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history} children={routing} />
        </Provider>,
        document.getElementById('app')
    )
}

renderApp();

if (module.hot) {
    module.hot.accept('./routes.js', () => {
        routing = require('./routes.js').default;
        renderApp();
    })
}