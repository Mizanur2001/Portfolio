import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Terms from './pages/Terms';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Payment';
import Resume from './pages/Resume';
import Refund from './pages/Refund';
import Shipping from './pages/Shipping';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/pay' element={<Payment />} />
          <Route path='/cv' element={<Resume />} />
          <Route path='/refund' element={<Refund />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
