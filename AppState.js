import logo from './logo.svg';
import './App.css';
import message from './funcao_mensagem/message';
import React, {useState} from 'react';

function TesteState() {
  const [increment, setIncrement] = useState(0);

  function handleIncrement() {
    setIncrement(increment + 1);
  }
  return (
    <>
    <h1>Valor: {increment}</h1>
    <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

function App() {
  const word = 'Olá mundo! Meu nome é Adler e estou utilizando react.js!';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {TesteState()}
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
