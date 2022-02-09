import React, { useState } from 'react';
import './column_style.css'
import { AiOutlinePlus } from 'react-icons/ai'


const AddTask = ({ createTask }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState(0);

  const submit = () => {
    createTask(id, name, date)
    setName('')
    setDate('')
    setId(prevState => prevState + 1)
  }
  return <div>
     <form class='add-task'>
        <div class='task-input'>
          <input type='text' class='task-name' value={name} placeholder='task name' onChange={(e) => setName(e.target.value)}/>
          <input type='date'class='task-date' value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <a onClick={submit}>
          <AiOutlinePlus class='task-plus'/>
        </a>
      </form>
  </div>;
};

export default AddTask;
