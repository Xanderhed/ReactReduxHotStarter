import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('game'));

if (module.hot) {
    module.hot.accept('./app.js', () => {
        const NewApp = require('./app.js').default;
        ReactDOM.render(<NewApp />, document.getElementById('game'));
    })
}