import React, {Component} from 'react';
import { Card, Container, Row, Col } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{size: 8, offset: 2}}>
            <Card>
              <h1>React.js</h1>
              <div>
                {["Hello ", <span>World</span>, "!"]  }
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;