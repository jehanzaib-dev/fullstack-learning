import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from './components/routes/publicRoute.jsx';

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