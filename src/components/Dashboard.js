import React, {Component} from 'react';
import {getJwt} from "../helpers/jwt";
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined
        };

    }

    componentDidMount() {
        const jwt = getJwt();

        if (!jwt) {
            this.props.history.push('/login');
        }

        console.log('here');
        axios.get('/dashboard', { headers: { Authorization: `Bearer ${jwt}`} }).then(res => this.setState({
            data: res.data
        })).catch( err => {
            localStorage.removeItem('user_id');
            this.props.history.push('/login');
        });
    }

    render() {
        if (this.state.data === undefined) {
            return (
                <div>
                    <h1>
                        Loading ...
                    </h1>
                </div>
            );
        }
        return (
            <div>
                {this.state.data.data}
                {/*{this.props.children}*/}
            </div>
        );
    }
};

export default Dashboard;