import React, { useState, useEffect } from 'react';
import './App.css';
import Column from './components/Column'
import Header from './components/Header'
export const HeightContext = React.createContext();


function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [columns, setColumns] = useState([{}])
  // const uniqueHeight = { height : "auto" }
  const createColumn = (id, title) => {
    const newColumn = { id: id, title: title }
    setColumns([...columns, newColumn])
    setId(prevState => prevState + 1)
    setName('')
  }
  const deleteColumn = (id) => {
    setColumns(columns.filter(column => column.id !== id))
  }
  // column fetch
  const endpoint = 'https://trello-clone1.hasura.app/v1/graphql'
  const headers = {
    'x-hasura-admin-secret': '6sgmC96b5CkHOai3cwJbfzMLeTqJebUemTdLayvc6rwpTRc6vlDWnuyP4qvfLk24',
    'content-type' : 'application/json'
  }
  const graphqlQuery = {
    "operationName" : 'fetchColumns',
    "query" : `query fetchColumns {
      tasks {
        status
      }
      }`,
  }
  const options = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(graphqlQuery)
  }
  useEffect(() => {
    fetch(endpoint, options).then(res => res.json()).then(data => {
      const tasks = [...data.data.tasks]
      const statuses = [];
      tasks.forEach(task => {
        if (!statuses.includes(task.status)) {
          statuses.push(task.status)
        }
      });
      statuses.forEach(status => {
        createColumn(id, status)
      })
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <div class='sub-header'>
        <input type='text' class='add-input' placeholder='column name' onChange={(e) => setName(e.target.value)}/>
        <button class='add-button' onClick={() => createColumn(id, name)}>Add Column</button>
      </div>
      {/* <HeightContext.Provider value={uniqueHeight}> */}
        <div className='container'>
        {columns.map(column => {
          return <Column key={column.id} id={column.id} title={column.title} deleteColumn={deleteColumn}/>
        })}
        </div>
      {/* </HeightContext.Provider> */}
    </div>
  );
}

export default App;
