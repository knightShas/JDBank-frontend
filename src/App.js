import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './component/pages/Dashboard';
import Login from './component/pages/Login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
