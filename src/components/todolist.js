import React, {Component} from 'react';
import { Container, ListGroup } from 'react-bootstrap';

import {Todo} from './todo';

export class TodoList extends Component {
    render() {
        return (
            <Container className="my-container">
                {/* No Todos to do. Yay! */}
                <ListGroup>
                    { this.props.todos.map((todo, index) => (
                        <Todo todo={todo} key={index.toString()} index={index} toggleStatus={this.props.toggleStatus} />
                    ))}
                </ListGroup>
            </Container>
        )
    }
}