import logo from './logo.svg';
import './App.css';
import message from './funcao_mensagem/message';

function App() {
  const word = 'Olá mundo! Meu nome é Adler e estou utilizando react.js!';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message(word)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
