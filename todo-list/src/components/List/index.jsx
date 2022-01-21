import React, { Component } from 'react';
import './List.css';


class List extends Component {

   

    render() {
        return (
            <ul className='list' >
                {
                    this.props.data.map((value) => 
                        <li className={value.isDone?'done':''} 
                            key={value.id} 
                            >
                            <input type='checkbox' 
                                id={value.id}
                                checked={value.isDone}
                                onChange={this.dnoeChangeHandler} />
                            <label htmlFor={value.id}></label>
                            <p>{value.todo}</p>
                            <button onClick={this.deleteHandler(value.id)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        )
    }

    dnoeChangeHandler = (e) => {
        const id = e.target.id
        const isDone = e.target.checked
        
        this.props.doneHandler(id, isDone);
    }
    
    deleteHandler = (id) => {
        
        return () => {
            if(window.confirm('sure to delete?')) {
                this.props.deleteTodoHandler(id);
            }
        }
    }
}

export default List;