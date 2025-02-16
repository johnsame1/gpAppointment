import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PatientsProfile from './Pages/PatientsProfile';

function App() {
  return (
    <Router>  
      <div className="App">
        <Routes>
          <Route path="/user-profile" element={<PatientsProfile />} >
          
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
