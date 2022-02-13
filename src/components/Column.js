import React, { useState } from 'react';
import Task from './Task'
import './column_style.css'
import { AiOutlineMenu } from 'react-icons/ai'
import AddTask from './AddTask';
// import { HeightContext } from '../App';

const Column = ({id, title, deleteColumn }) => {
  const [tasks, setTasks] = useState([])
  // const style = useContext(HeightContext)
  const addTask = (id, name, date) => {
    const newTasks = {id: id, name: name, date: date}
    setTasks([...tasks, newTasks])
  }

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.id !== taskKey))
    console.log(taskKey)
  }

  return <div className='column' >
    <div class='column-header'>
      {title}
      <AiOutlineMenu />
    </div>
    <div class='column-content'>
        {tasks.map((task) => {
          return <Task key={task.id} id={task.id} title={task.name} date={task.date} deleteTask={deleteTask} />
        })}
    <AddTask createTask={addTask} />
    </div>
    <div class='column-footer'>
      <button class='column-delete' onClick={() => deleteColumn(id)}>Delete Column</button>
    </div>
  </div>;
};

export default Column;
