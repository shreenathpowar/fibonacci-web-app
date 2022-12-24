import React from 'react';
import './App.css';
import './Nav.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="Nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/otherpage">Other Page</a></li>
          </ul>
        </nav>
        <header className="App-header">
          <h1>Fibonacci Calculator</h1>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
