import css from './app.css';

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import Index from './components/index';

const App = (props) => {
    return (
        <Provider store={props.store}>
            <Router history={props.history}>
                <Route path="/" component={Index}/>
            </Router>
        </Provider>
    )
}

export default App;