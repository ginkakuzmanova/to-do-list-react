import React, {useContext, useState} from 'react'
import {TaskContext} from '../TaskContext'
import {Checkbox} from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskContext)
    const [decor, setDecor] = useState(false)

    return (
        <li className="list-item">
            <Checkbox className="checkbox" onClick={() => setDecor(!decor)}>
                <span style={{
                    textDecoration: decor ? "line-through" : ""
                }}>
                    {task.title}
                </span>
            </Checkbox>
            <div>
                <button
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}>
                    <i className="fas fa-trash-alt"/>
                </button>
                {' '}
                <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"/>
                </button>
            </div>
        </li>
    )
}

export default Task