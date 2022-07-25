import { Routes, Route } from 'react-router-dom';
import './App.css';
import Certificate from './component/certification/Certificate';
import NewCertificate from './component/certification/NewCertificate';
import Dashboard from './component/pages/Dashboard';
import Login from './component/pages/Login';
import Profile from './component/pages/Profile';
import PolicyDetail from './component/policies/PolicyDetail';
import Signout from './component/Signout.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={<PolicyDetail />} />
        <Route path="/new" element={<NewCertificate />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/logout" element={<Signout />} />
      </Routes>
  );
}

export default App;
