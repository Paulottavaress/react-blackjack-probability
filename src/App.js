import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LiveGame from './pages/LiveGame';
import LiveGameState from './context/livegame/LiveGameState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <LiveGameState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={
                <div>
                  <LiveGame />
                </div>
              }>
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </LiveGameState>
  );
}

export default App;