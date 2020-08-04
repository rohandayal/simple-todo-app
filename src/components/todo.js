import React, {Component} from 'react';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';

export class Todo extends Component {
    render() {
        const {todo, toggleStatus, index} = this.props;
        return (
            <ListGroup.Item variant={todo.variant}>
                <Row>
                    <Col xs={8} className={ todo.status ? "" : 'todo-not-done'}>
                        {todo.text}
                    </Col>
                    <Col xs={4}>
                        <Button onClick={() => toggleStatus(index)} variant={todo.status ? "secondary" : 'danger'}>Mark {todo.status ? 'Not' : ''} Done</Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
}