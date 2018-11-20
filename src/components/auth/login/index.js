import React, {Component} from 'react';
import {Card, Row, Col} from 'reactstrap';
import LoginForm from './form'

class LoginPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col sm="12" md={{size: 8, offset: 2}}>
                    <Card>
                        <LoginForm/>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default LoginPage;