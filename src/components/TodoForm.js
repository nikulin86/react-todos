import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })


    const handelSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }

    const handelChange = e => {
        setInput(e.target.value)
    }

    return (
        <div>
            <form className="todo-form" onSubmit={handelSubmit}>
                {props.edit ? (
                    <> <input
                        type="text"
                        placeholder="Измените задачу"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handelChange}
                        ref={inputRef}
                    />
                        <button className="todo-button">Изменить задачу</button> </>) :
                    (<>
                        <input
                            type="text"
                            placeholder="Введите задачу"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handelChange}
                            ref={inputRef}
                        />
                        <button className="todo-button">Добавить задачу</button>
                    </>)}
            </form>
        </div>
    )
}

export default TodoForm