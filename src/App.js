import logo from './logo.svg';
import './css/styles.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/nailbook" element ={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
