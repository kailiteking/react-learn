import React, { Component } from 'react';
import './App.css'
import Add from './components/Add';
import List from './components/List';
import Controlls from './components/Controlls';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: "1",
                    todo: 'todos01',
                    isDone: true
                },
                {
                    id: "2",
                    todo: 'todos02',
                    isDone: false
                },
                {
                    id: "3",
                    todo: 'todos03',
                    isDone: false
                }
            ],
            mode: 'light'
        };

        this.addTodoHandler = this.addTodoHandler.bind(this);
        this.doneHandler = this.doneHandler.bind(this);
        this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
        this.checkAllTodo = this.checkAllTodo.bind(this);
        this.clearAllDoneHandler = this.clearAllDoneHandler.bind(this);
    }

    render() {
        return(
            <div className="app">
                <Add addTodoHandler={this.addTodoHandler} />
                <List 
                    data={this.state.data}
                    doneHandler={this.doneHandler}
                    deleteTodoHandler={this.deleteTodoHandler} />
                <Controlls 
                    data={this.state.data}
                    checkAllTodo={this.checkAllTodo}
                    clearAllDoneHandler={this.clearAllDoneHandler} />    
            </div>
        )
    }

    addTodoHandler(todoItem) {
        this.setState(state =>
            ({data: [...state.data, todoItem]})
        )
    }

    doneHandler(id, isDnoe) {
        const {data} = this.state
        const newData = data.map(todoItem => {
            if(todoItem.id === id) todoItem.isDone = isDnoe
            return todoItem
        })

        this.setState(state => (
            {data: newData}
        ))
    }

    deleteTodoHandler(id) {
        const {data} = this.state
        const newData = data.filter(todoItem => todoItem.id !== id)
        this.setState({ data: newData })
    }

    checkAllTodo(checked) {
        
        const {data} = this.state
        const newData = data.map(todoItem => {
            todoItem.isDone = checked
            return todoItem
        });
        this.setState({ data: newData });
    }

    clearAllDoneHandler() {
        const {data} = this.state
        const newData = data.filter(todoItem => !todoItem.isDone) 
        this.setState({ data: newData });
    }

}

export default App