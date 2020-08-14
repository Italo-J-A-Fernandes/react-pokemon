import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MapPage from './screens/Map/MapPage';

const App = () => (
    <Switch>
        <Route path="/map" component={MapPage} />
        <Redirect to="/map" />
    </Switch>
);

export default App;
