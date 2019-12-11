import React from 'react';
import logo from './logo.svg';
import './App.css';
import Document, { Head, Main, NextScript } from 'next/document'

function App() {
  return (
    <div className="App">
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <body>
        <Main />
        <NextScript />
      </body>
    </div>
  );
}

export default App;
