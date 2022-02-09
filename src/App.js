import './App.css';
import { useState, useEffect } from 'react';
import Column from './components/Column'
import Header from './components/Header'

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [columns, setColumns] = useState([{}])

  const createColumn = (id, title) => {
    const newColumn = { id: id, title: title }
    setColumns([...columns, newColumn])
    setId(prevState => prevState + 1)
    setName('')
  }
  const deleteColumn = (id) => {
    setColumns(columns.filter(column => column.id !== id))
  }
  return (
    <div className="App">
      <Header />
      <div class='sub-header'>
        <input type='text' class='add-input' placeholder='column name' onChange={(e) => setName(e.target.value)}/>
        <button class='add-button' onClick={() => createColumn(id, name)}>Add Column</button>
      </div>
      <div className='container'>
        {columns.map(column => {
          return <Column key={column.id} id={column.id} title={column.title} deleteColumn={deleteColumn}/>
        })}
      </div>
    </div>
  );
}

export default App;
