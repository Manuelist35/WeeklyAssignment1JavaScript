import React from 'react'
import ToDo from './ToDo'

export default function TodoList({todos}) {
    return (
        todos.map(todo => {
            return <ToDo todo={todo} />
        })
    )
}
