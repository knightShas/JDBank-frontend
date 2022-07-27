import { Routes, Route } from 'react-router-dom';
import './App.css';
import AgentDetail from './component/admin/Agent/AgentDetail';
import AgentPage from './component/admin/AgentPage';
import CertificatePage from './component/admin/CertificatePage';
import Certificate from './component/certification/Certificate';
import NewCertificate from './component/certification/NewCertificate';
import NotAllowed from './component/NotAllowed';
import Dashboard from './component/pages/Dashboard';
import Login from './component/pages/Login';
import Profile from './component/pages/Profile';
import Signup from './component/pages/Signup';
import PolicyDetail from './component/policies/PolicyDetail';
import Signout from './component/Signout.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={<PolicyDetail />} />
        <Route path="/new" element={<NewCertificate />} />
        <Route path="/certificate" element={<Certificate />} />

        <Route path="/agent" element={<AgentPage />} />
        <Route path="/agent/detail" element={<AgentDetail />} />
        <Route path="/allcertificate" element={<CertificatePage />} />
        <Route path="/logout" element={<Signout />} />

        <Route path="/notallowed" element={<NotAllowed />} />
      </Routes>
  );
}

export default App;
