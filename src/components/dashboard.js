import React, {Component} from 'react';
import {
  Card, CardBody,
  Container, Row, Col,
  Button,
  Form, FormGroup, Label, Input,
  Nav, NavItem, NavLink,
  TabContent, TabPane, CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';


class Dashboard extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{size: 8, offset: 2}}>
            <Card>
              <h1>React.js</h1>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;