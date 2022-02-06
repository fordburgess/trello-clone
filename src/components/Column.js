import React, { useState, useRef } from 'react';
import Task from './Task'
import './column_style.css'
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'

const Column = (props) => {
  const [taskId, setTaskId] = useState(0);
  const [tasks, setTasks] = useState([])
  const inputName = useRef()
  const inputDate = useRef()

  const createTask = (id, name, date) => {
    const newTasks = {id: id, name: name, date: date}
    setTasks([...tasks, newTasks])
    setTaskId(prevState => prevState + 1)
    console.log(tasks)
  }

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.id !== taskKey))
    console.log(taskKey)
  }

  return <div className='column'>
    <div class='column-header'>
      {props.title}
      <AiOutlineMenu />
    </div>
    <div class='column-content'>
        {tasks.map((task) => {
          return <Task key={task.id} id={task.id} title={task.name} date={task.date} deleteTask={deleteTask} />
        })}
      <form class='add-task'>
        <div class='task-input'>
          <input type='text' class='task-name' ref={inputName} placeholder='task name'></input>
          <input type='date'class='task-date' ref={inputDate}></input>
        </div>
        <a onClick={() => createTask(taskId, inputName.current.value, inputDate.current.value)}>
          <AiOutlinePlus class='task-plus'/>
        </a>
      </form>
    </div>
    <div class='column-footer'>
      <button class='column-delete'>Delete Column</button>
    </div>
  </div>;
};

export default Column;
