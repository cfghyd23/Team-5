import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InternDash from './components/internDash';



function App() {
  return (
    <div className="App">
        
    <Router>
    <Navbar />
        <Routes>
            <Route exact path='/' element={<InternDash />} ></Route>
        </Routes>
    </Router>
    
    </div>

  )
}

export default App
