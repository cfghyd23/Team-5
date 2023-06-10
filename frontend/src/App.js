import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InternDash from './components/internDash';
import Login from './components/login';
import Signup from './components/signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <div className='App'>
      <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/home" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
        
    </Router>

  )
}

export default App
