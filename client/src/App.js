import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import {RegisterPage} from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import { HomePage } from './pages/homepage.jsx';

const App=()=>{
  
return(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/home" element={<HomePage/>}/>


      <Route path="/" element={<RegisterPage/>}/>  
    </Routes>  
  </BrowserRouter>
  );
}

export default App;