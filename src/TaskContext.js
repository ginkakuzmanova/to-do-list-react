import React, {createContext, useEffect, useState} from 'react'
import uuid from 'uuid'

export const TaskContext = createContext(null)

const TaskContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []
    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [editItem, setEditItem] = useState(null)

    // Add tasks
    const addTask = title => {
        setTasks([...tasks, {title, id: uuid()}])
    }

    // Remove tasks
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // Clear tasks
    const clearList = () => {
        setTasks([])
    }

    // Find task
    const findItem = id => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    // Edit task
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? {title, id} : task))
        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider