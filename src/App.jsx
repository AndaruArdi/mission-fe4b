import { HashRouter, Routes, Route } from "react-router";

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import DaftarSaya from './pages/DaftarSaya';

function App() {
  
    return (
      <HashRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/daftarsaya" element={<DaftarSaya />} />
      </Routes>
      </HashRouter>
  );
};

export default App
