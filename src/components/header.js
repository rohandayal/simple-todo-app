import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class Header extends Component {
    render() {
        const {addNew} = this.props;
        return(
            <Container className="my-container">
                <Row>
                    <Col xs={8}>
                        Awesome Todo App!
                    </Col>
                    <Col xs={4}>
                        <Button variant="primary" onClick={addNew}>Create New</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}