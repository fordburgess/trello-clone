import './App.css';
import Column from './components/Column'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Column title={"In Progress"}/>
        <Column title={"Upcoming"}/>
        <Column title={"Open Ticket"}/>
        <Column title={"Completed"} />
      </div>
    </div>
  );
}

export default App;
