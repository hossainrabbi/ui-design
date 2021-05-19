import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccessControl from './pages/AccessControl';
import AccessControlDetails from './pages/AccessControlDetails';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import OrganisationProfile from './pages/OrganisationProfile';
import Projects from './pages/Projects';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route
                    exact
                    path="/organisationProfile"
                    component={OrganisationProfile}
                />
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
