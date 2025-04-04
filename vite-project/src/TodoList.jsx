import { set } from 'mongoose';
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [task, setTask] = useState([{ task: 'Sample Task', id: uuidv4(), isDone: false }]);
    const [newTask, setNewTask] = useState('');

    let addNewTask = () => {
       setTask([...task, { task: newTask, id: uuidv4() , isDone: false}]);
       setNewTask('');
    }

    let updateTaskValue = (e) => {
        setNewTask(e.target.value);
    }

    const deleteTask = (id) => {
        const copy = task.filter((item) => item.id !== id);
        setTask(copy);
    }

    let upperCaseAll = () => {
        const copy = task.map((item) => {
            return { ...item, task: item.task.toUpperCase() };
        });
        setTask(copy);
    }

    let markAsDone = (id) => {
        setTask((prevTask) => {
            return prevTask.map((item) => {
                if (item.id === id) {
                    return { ...item, isDone :true };
                } else {
                    return item;
                }
            });
        });
    }

  return (
    <div> 
        <input type="text" placeholder='Add a task' value={newTask} onChange={updateTaskValue} /> <br/>
        <button onClick={addNewTask}>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <h4>TodoList</h4> 
        <ul>
            {
                task.map((item) => {
                    return (
                        <li key={item.id}>
                           <span style={item.isDone ? {textDecorationLine : 'line-through'} : {}}> {item.task}</span>
                           &nbsp; &nbsp; &nbsp;
                           <button onClick={() => deleteTask(item.id)}>Delete</button>
                           <button onClick={() => markAsDone(item.id)}>Done</button>
                        </li>
                    )
                })
            }
        </ul>

        <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  )
}

export default TodoList