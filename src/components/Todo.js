import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';


function Todo({ todos, completeTodo, removeTodo, updatedTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updatedTodo(edit.id, value);

        setEdit({
            id: null,
            value: ''
        });
    };
    
if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
}

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div className="todo" key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className="icons">
            <TiEdit size={30}
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className="edit-icon"
                />
                <RiCloseCircleLine size={30} 
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
            </div>
        </div>
    ))
}

export default Todo