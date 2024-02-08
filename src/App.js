import './css/styles.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './Homepage';
import { PurposePage } from './Purposepage';
import { VideoPage } from './Videopage';
import { DiseasePage } from './Diseasepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/nailbook" element ={<HomePage/>} />
          <Route path="/nailbook/purpose" element ={<PurposePage/>} />
          <Route path="/nailbook/video" element ={<VideoPage/>} />
          <Route path="/nailbook/detect" element ={<DiseasePage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
