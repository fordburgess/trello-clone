import React, {useState, useEffect} from 'react'
import './App.css'
import Column from './components/Column'
import Header from './components/Header'
export const HeightContext = React.createContext()

function App() {
  const [name, setName] = useState('')
  const [columnId, setColumnId] = useState(0)
  const [columns, setColumns] = useState([])
  // const uniqueHeight = { height : "auto" }
  const createColumn = (id, title) => {
    const newColumn = {id: id, title: title}
    setColumns([...columns, newColumn])
    setColumnId(prevState => prevState + 1)
    console.log(columnId)
    setName('')
  }
  const deleteColumn = columnId => {
    setColumns(columns.filter(column => column.columnId !== columnId))
  }

  // user sync

  function userSyncRule(user, context, callback) {
    const userId = user.user_id
    const name = user.first_name

    const query = `mutation($userId: String!, $name: String) {
      insert_users(objects: [{
        id: $userId, name: $name, last_seen: "now()"
      }], on_conflict: {constraint: users_pkey, update_columns: [last_seen, name]}
      ) {
        affected_rows
      }
    }`;
  }

  // column fetch
  const endpoint = 'https://trello-clone1.hasura.app/v1/graphql'
  const headers = {
    'x-hasura-admin-secret': '6sgmC96b5CkHOai3cwJbfzMLeTqJebUemTdLayvc6rwpTRc6vlDWnuyP4qvfLk24',
    'content-type': 'application/json',
  }
  const graphqlQuery = {
    operationName: 'fetchColumns',
    query: `query fetchColumns {
      tasks {
        status
      }
      }`,
  }
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  }
  useEffect(() => {
    fetch(endpoint, options)
      .then(res => res.json())
      .then(data => {
        const tasks = data.data.tasks
        const statuses = []
        tasks.forEach(task => {
          if (!statuses.includes(task.status)) {
            console.log(task)
            statuses.push(task.status)
          }
        })
        console.log(statuses)
        statuses.forEach(status => {
          createColumn(columnId, status)
          setColumnId(prevState => prevState + 1)
        })
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <div class="sub-header">
        <input type="text" class="add-input" placeholder="column name" onChange={e => setName(e.target.value)} />
        <button class="add-button" onClick={() => createColumn(columnId, name)}>
          Add Column
        </button>
      </div>
      {/* <HeightContext.Provider value={uniqueHeight}> */}
      <div className="container">
        {columns.map(column => {
          return <Column key={column.columnId} id={column.columndId} title={column.title} deleteColumn={deleteColumn} />
        })}
      </div>
      {/* </HeightContext.Provider> */}
    </div>
  )
}

export default App
