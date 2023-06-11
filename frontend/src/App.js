import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InternDash from './components/internDash';
import Login from './components/Login';
import Signup from './components/Signup';
import Admindash from './components/AdminDash';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        
    <Router>
    <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/internDash' element={<InternDash />} ></Route>
            <Route exact path='/login' element={<Login />} ></Route>
            <Route exact path='/signup' element={<Signup />} ></Route>
            <Route exact path='/adminDash' element={<Admindash />} ></Route>
            {/* <Route exact path='/Home' element={<Home/>} ></Route> */}
        </Routes>
    </Router>
    
    </div>

  )
}

export default App
