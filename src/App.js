import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LiveGame from './pages/LiveGame';
import LiveGameState from './context/livegame/LiveGameState';
import './App.css';

const App = () => {
  return (
    <LiveGameState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<LiveGame />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </LiveGameState>
  );
}

export default App;