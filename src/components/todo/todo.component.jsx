import React from 'react';
import "./todo.styles.css";

const Todo = (props) =>  {
    
    return (
        <div className = 'todo_style'>
            <i className ='fa fa-times' aria-hidden ='true' onClick={() => {
                props.onSelect(props.id);
            }}/>
        
            <li> {props.text} </li>
        </div>
    );
};

export default Todo;