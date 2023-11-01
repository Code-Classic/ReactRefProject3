import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddEmployee from './component/AddEmployee';
import UpdateEmployee from './component/UpdateEmployee';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addEmployee' element={<AddEmployee />}></Route>
      <Route path='/updateEmployee' element={<UpdateEmployee />}></Route>
    </Routes>
    </>
    
  );
}

export default App;
