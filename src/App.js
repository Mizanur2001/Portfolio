import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
