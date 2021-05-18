import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccessControl from './components/AccessControl';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Sidebar} />
                <Route exact path="/accessControl" component={AccessControl} />
            </Switch>
        </Router>
    );
}

export default App;
