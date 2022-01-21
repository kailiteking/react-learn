import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import './Add.css';

class Add extends Component {

    constructor(props) {
        super(props)
        this.todoInput = React.createRef();
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }

    render() {

        return (
            <form className='add' onSubmit={this.SubmitHandler}>
                <label htmlFor="todo">
                    TODO
                </label>
                <input type="text" 
                    id="todo" 
                    placeholder='Add things here'
                    ref={this.todoInput} />
                <button>ADD</button>
            </form>
        )
    }

    SubmitHandler(e) {
        // 阻止表单默认事件
        e.preventDefault()
        // 获取input内容
        const todoValue = this.todoInput.current.value;
        // 创建todo对象
        const todoItem = {
            id: uuid(),
            todo: todoValue,
            isDone: false
        }
        // 执行父元素传递发方法，传递数据
        this.props.addTodoHandler(todoItem);
    }
    
}

export default Add