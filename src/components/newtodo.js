import React, {Component} from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';

export class New extends Component {
    state = {
        text: '',
        variant: 'primary'
    }

    saveTodo = () => {
        this.props.newTodo(this.state.text, this.state.variant);
        this.props.addNew();
    }

    render() {
        const {addNew} = this.props;
        return (
            <Container className="my-container">
                <Row>
                    <Col xs={6}>
                        <input onChange={(e) => this.setState({...this.state, text: e.target.value})} />
                    </Col>
                    <Col xs={3}>
                        <Form>
                            <Form.Control as="select">
                                <option value="primary" onClick={(e) => this.setState({...this.state, variant: 'primary'})}>primary</option>
                                <option value="success" onClick={(e) => this.setState({...this.state, variant: 'success'})}>success</option>
                                <option value="warning" onClick={(e) => this.setState({...this.state, variant: 'warning'})}>warning</option>
                                <option value="danger" onClick={(e) => this.setState({...this.state, variant: 'danger'})}>danger</option>
                            </Form.Control>
                        </Form>
                    </Col>
                    <Col xs={3}>
                        <Button onClick={this.saveTodo} onChange>Create</Button>
                        <Button variant="danger" onClick={addNew}>Cancel</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}