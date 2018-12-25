import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);

    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            localStorage.setItem('cool-jwt', res.data.auth_token);
            this.props.history.push('/protected');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <label>email</label>
                    <input type="text" name="email" onChange={e => this.change(e)} value={this.state.email} />
                    <label>password</label>
                    <input type="password" name="password" onChange={e => this.change(e)} value={this.state.password} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
};

export default Login;