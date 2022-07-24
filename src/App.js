import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './component/pages/Dashboard';
import Login from './component/pages/Login';
import Profile from './component/pages/Profile';
import Signout from './component/Signout.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Signout />} />
      </Routes>
  );
}

export default App;
