import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import './task_style.css'

const Task = ({id, title, date, deleteTask}) => {


  return <div class='task-container'>
    <AiOutlineClose class='task-close' onClick={() => deleteTask(id)}/>
    <p>{title}</p>
    <p>Due By: {date}</p>
  </div>
};

export default Task;
