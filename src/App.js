import logo from './logo.svg';
import './App.css';

function App() {

  const handleNameChange = () => {
    const name = ['Peter','Simon','Millicent','Sifa','Joshua']
    const int = Math.floor(Math.random()*5);
    return name[int];
  }
  const name="Simon"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see what i have change.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Random name generator: {handleNameChange()}</h1>
        <p>my name is:{name}</p>
      </header>
    </div>
  );
}

export default App;
