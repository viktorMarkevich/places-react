// import React, { Component } from 'react';
import React from 'react';
import { Card, CardBody,
         Container, Row, Col, Jumbotron,
         Button,
         Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// class Authorization extends Component {
//     render() {
//         return (
//             <div>
//                 <Card>
//                     <CardBody>
//                         <CardTitle>Card title</CardTitle>
//                         <CardSubtitle>Card subtitle</CardSubtitle>
//                         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//                         <Button>Button</Button>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }
// }

const Authorization = (props) => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Card>
                                <CardBody>
                                    <Form>
                                        <FormGroup row>
                                            <Label for="exampleEmail" sm={2}>Email</Label>
                                            <Col sm={10}>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="examplePassword" sm={2}>Password</Label>
                                            <Col sm={10}>
                                                <Input type="password" name="password" id="examplePassword" placeholder="some password" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col sm={{ size: 10, offset: 2 }}>
                                                <Button>Sign in</Button>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col sm={{ size: 10, offset: 2 }}>
                                                <a href={'#'}>Forgot password?</a>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col sm={{ size: 10, offset: 2 }}>
                                                <Button>Sign in with Google</Button>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col sm={{ size: 10, offset: 2 }}>
                                                <Button>Sign in with Facebook</Button>
                                            </Col>
                                        </FormGroup>

                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Authorization;