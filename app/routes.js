import React from 'react';
import { Route } from 'react-router';

import Index from './components/index';

const routes = 
    <div>
        <Route exact path="/" component={Index} />
    </div>

export default routes;