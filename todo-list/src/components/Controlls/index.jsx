import React, { Component } from 'react';
import './Controlls.css'

class Controlls extends Component {

    render() { 
        const {data} = this.props
        // 计算已经完成的todo
        const done = data.reduce((preVlaue, current) => preVlaue + (current.isDone ? 1 : 0), 0)
        const total = data.length
        return (
            // 注意 checkbox box 的 checked 
            // 使用 checked 属性时，checkbox 是受控组件，
            // 是否check 取决于属性值，而非用户的点击
            // 使用 defaultchecked 责只会修改一次状态，组件非受控
            <div className="controlls">
                <input 
                    type="checkbox" id="check-all" 
                    checked={total === done && total > 0}
                    onChange={this.totalChangeHandler.bind(this)} />
                <label htmlFor="check-all"></label>
                <p>Done({done})/Total({total})</p>
                <button onClick={this.props.clearAllDoneHandler} >Delete All Done</button>
            </div>
        );
    }

    totalChangeHandler(e) {
        const checked = e.target.checked
        this.props.checkAllTodo(checked)
        console.log(checked);
    }

}
 
export default Controlls;