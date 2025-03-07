import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
  );
};



export default App
