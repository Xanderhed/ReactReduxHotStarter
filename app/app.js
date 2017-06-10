import css from './app.css';

import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './reducers';
import Index from './components/index';

const store = createStore(reducers, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

const App = (props) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Index}/>
            </Router>
        </Provider>
    )
}

export default App;