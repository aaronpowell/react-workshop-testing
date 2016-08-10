import React, { Component } from 'react';
import Input from './Input';
import PasswordInput from './PasswordInput';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        const { onLogin } = this.props;

        return (
            <form onSubmit={(e) => (e.preventDefault(), onLogin(this.state.username, this.state.password))}>
                <Input type="text" id="username" value={this.state.username} onChange={(e) => this.setState({ 'username': e.target.value })} label="Username" />

                <PasswordInput label="Password" id="password" value={this.state.password} onChange={(e) => this.setState({ 'password': e.target.value })} />

                <button type="submit">Login</button>
            </form>
        );
    }
}
