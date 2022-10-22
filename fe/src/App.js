import logo from './logo.svg';
import './App.css';
import {runBert} from './index.js';

const exampleTexts = [
  "Foxes playing a pond.",
  'Hello.',
  'How are you?',
  "What's up?",
  "Two plus Two Equals Four.",
  "Five plus Two is One.",
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi this is Meg also
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hi this is Meg</h1>
      </header>
    </div>
  );
}

export default App;
