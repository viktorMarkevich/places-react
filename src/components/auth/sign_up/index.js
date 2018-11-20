import React, {Component} from 'react';
import {Card, Row, Col} from 'reactstrap';
import SignUpForm from './form'

class SignUpPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col sm="12" md={{size: 8, offset: 2}}>
                    <Card>
                        <SignUpForm/>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default SignUpPage;