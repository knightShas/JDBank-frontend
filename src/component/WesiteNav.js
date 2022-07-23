import { Link } from "react-router-dom";
import logo from '../../src/jdbank.png';
import './WebsiteNav.css';

function WebsiteNav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="logo-img" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item" id="com_link">
                                <Link className="nav-link" to="#">Profile</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item" id="com_link">
                                <b><Link className="nav-link" style={{ color: "green" }} to="#">Sample</Link></b>
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
export default WebsiteNav;