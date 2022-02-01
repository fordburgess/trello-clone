import './App.css';
import Column from './components/Column'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
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
