import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './pages/Home';
import {Router,Routes, Route, BrowserRouter} from 'react-router-dom'
import AddUser from './pages/Admin/AddUser';
import Employees from './pages/Admin/Employees';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/employees:id" element={<Employees/>}/>
      <Route path="/add-profile" element={<AddUser/>}/>


    </Routes>
    </BrowserRouter>
   
  
    </div>
  );
}

export default App;
