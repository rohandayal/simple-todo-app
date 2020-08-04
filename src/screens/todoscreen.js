import React, {Component} from 'react';
import {Header, TodoList} from '../components';
import { New } from '../components/newtodo';

export class TodoScreen extends Component {
    state = {
        todos: [
            {
                text: "Prepare for react introduction",
                status: false,
                variant: ''
            },
            {
                text: "Make sure libraries are installed",
                status: true,
                variant: 'warning'
            },
        ],
        addNew: false
    };

    addNew = () => this.setState({
        ...this.state,
        addNew: !this.state.addNew
    })

    newTodo = (text, variant) => {
        let newState = {...this.state};
        newState.todos.push({
            text: text,
            variant: variant,
            status: false
        })
        this.setState({...newState})
    }

    toggleStatus = (index) => {
        let newState = {...this.state};
        newState.todos[index].status = !this.state.todos[index].status;
        this.setState({...newState});
    }
    
    render() {
        return(
            <div>
                <Header addNew={this.addNew} />
                { this.state.addNew &&
                    <New newTodo={this.newTodo} addNew={this.addNew} />
                }
                <TodoList todos={this.state.todos} toggleStatus={this.toggleStatus} />
            </div>
        )
    }
}