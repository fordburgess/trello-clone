import React, { useState, useEffect } from 'react';
import Task from './Task'
import './column_style.css'
import { AiOutlineMenu } from 'react-icons/ai'
import AddTask from './AddTask';
// import { HeightContext } from '../App';

const Column = ({id, title, deleteColumn }) => {
  const [tasks, setTasks] = useState([])
  // const style = useContext(HeightContext)
  const addTask = (taskId, name, date) => {
    const newTasks = {id: taskId, name: name, date: date}
    setTasks([...tasks, newTasks])
  }
  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.id !== taskKey))
  }
  // const endpoint = 'https://trello-clone1.hasura.app/v1/graphql';
  // const headers = {
  //   'x-hasura-admin-secret': '6sgmC96b5CkHOai3cwJbfzMLeTqJebUemTdLayvc6rwpTRc6vlDWnuyP4qvfLk24',
  //   'content-type' : 'application/json'
  // }
  // const graphqlQuery = {
  //   "operationName" : 'fetchTasks',
  //   "query" : `query fetchTasks {
  //     tasks {
  //       title
  //       status
  //       due_by
  //       id
  //     }
  //     }`,
  // }
  // const options = {
  //   "method": "POST",
  //   "headers": headers,
  //   "body": JSON.stringify(graphqlQuery)
  // }
  // useEffect(() => {
  //   fetch(endpoint, options).then(res => res.json()).then(data => {
  //     const tasks = [...data.data.tasks]
  //     tasks.forEach(task => {
  //       if (task.status === title) {
  //         addTask(task.id, task.title, task.due_by)
  //       }
  //     })
  //   });
  // }, []);

  return <div className='column' >
    <div class='column-header'>
      {title}
      <AiOutlineMenu />
    </div>
    <div class='column-content'>
        {tasks.map((task) => {
          return <Task key={task.taskId} id={task.taskId} title={task.name} date={task.date} deleteTask={deleteTask} />
        })}
    <AddTask createTask={addTask} />
    </div>
    <div class='column-footer'>
      <button class='column-delete' onClick={() => deleteColumn(id)}>Delete Column</button>
    </div>
  </div>;
};

export default Column;
