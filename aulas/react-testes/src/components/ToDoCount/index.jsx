import './todo-count.style.css'
import { useState, useEffect } from 'react'
import { getTodos } from "../../services/TodoService";

export function ToDoCount() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const fetchTodos = async() => {
            const todosFromApi = await getTodos()
            setCount(todosFromApi.length)
        }

        fetchTodos()
    }, [])

    return <span className="todo-count">{count}</span>
}