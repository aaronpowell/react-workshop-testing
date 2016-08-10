import React, { Component } from 'react';
import requiresAuthentication from './RequiresAuthentication';
import Dashboard from './Dashboard';
import Login from './Login';

const AppWrapper = requiresAuthentication({ Authenticated: Dashboard, Unauthenticated: Login });

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            authenticated: false
        };
    }

    render() {
        return <AppWrapper authenticated={this.state.authenticated} onLogin={(username, password) => this.setState({ authenticated: true })} />;
    }
}
