import logo from './logo.svg';
import './App.css';
import {runBert} from './index.js';
import SourceSelection from './SourceSelection';

function App() {
  const getArticleFromSource = (source, keywords) => {
    fetch(
      'https://newsapi.org/v2/everything?searchIn=content&q=' + keywords + '&sources=' + source + '&apiKey=188bd8b6df2a493c928f552125a6b78b',
    ).then(response => response.json())
    .then(data => {
      console.log(data);
      const keys = [];
      const articles = data.articles;
      keys.push(keywords)
      for (let i = 0; i < articles.length; i++) {
        keys.push(articles[i].title + " " + articles[i].description);
      }
      runBert(keys);
    });
  }
  getArticleFromSource("cnn", "Taylor Swift ");

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
      <SourceSelection/>
    </div>
  );
}

export default App;
