import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './app';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<App store={store} history={history}/>, document.getElementById('game'));

if (module.hot) {
    module.hot.accept('./app.js', () => {
        const NewApp = require('./app.js').default;
        ReactDOM.render(<NewApp store={store} history={history}/>, document.getElementById('game'));
    })
}