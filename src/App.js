import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccessControl from './components/AccessControl';
import AccessControlDetails from './components/AccessControlDetails';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Sidebar} />
                <Route exact path="/accessControl" component={AccessControl} />
                <Route
                    path="/accessControl/:id"
                    component={AccessControlDetails}
                />
            </Switch>
        </Router>
    );
}

export default App;
