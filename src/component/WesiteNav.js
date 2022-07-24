import { Link, Navigate } from "react-router-dom";
import logo from '../../src/jdbank.png';
import './WebsiteNav.css';

function WebsiteNav() {
    const agent_name = sessionStorage.getItem("Agent_Name");
    const role = sessionStorage.getItem("ROLE");
    if(role === "agent"){
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/dashboard">
                            <img src={logo} className="logo-img" alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <b><Link className="nav-link" to="/dashboard">Home</Link></b>
                                </li>
                                <li className="nav-item" id="com_link">
                                    <b><Link className="nav-link" to="/profile">Profile</Link></b>
                                </li>
                                <li className="nav-item" id="com_link">
                                    <b><Link className="nav-link" to="/certificate">Certificate</Link></b>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item" id="com_link">
                                    <b><Link className="nav-link" style={{ color: "green" }} to="#">{agent_name}</Link></b>
                                </li>
                                <li className="nav-item">
                                    <b><Link className="nav-link" style={{ color: "red" }} to="/logout">Logout</Link></b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
    else if(role === "admin"){
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/dashboard">
                            <img src={logo} className="logo-img" alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <b><Link className="nav-link" to="/dashboard">Home</Link></b>
                                </li>
                                <li className="nav-item" id="com_link">
                                    <b><Link className="nav-link" to="#">Agents</Link></b>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item" id="com_link">
                                    <b><Link className="nav-link" style={{ color: "green" }} to="#">{agent_name}</Link></b>
                                </li>
                                <li className="nav-item">
                                    <b><Link className="nav-link" style={{ color: "red" }} to="/logout">Logout</Link></b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
    else{
        <Navigate to="/logout" />
    }
}
export default WebsiteNav;