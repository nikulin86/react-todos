import React, { useState, useEffect } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'


const getLocalItems = () => {
    let list = localStorage.getItem('lists');

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
    }
}

function TodoList() {

    const [todos, setTodos] = useState(getLocalItems());


    const addTodo = todo => {
        if (!todo.text || /^\$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);



        console.log(todo)
    }

    const updatedTodo = (todoId, newValue) => {
        if (!newValue.text || /^\$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo;
        });

        setTodos(updatedTodo);
    }

    useEffect (() => {
        localStorage.setItem('lists', JSON.stringify(todos))
    }, [todos]);

    return (
        <div>
            <h1 className="todos-title">Планы на день:</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updatedTodo={updatedTodo}
            />
        </div>
    )
}

export default TodoList