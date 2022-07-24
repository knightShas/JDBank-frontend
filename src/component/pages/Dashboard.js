import { Navigate } from 'react-router-dom';
import { Component } from "react";
import WebsiteNav from "../WesiteNav";
import Score from "./Score";
import Policy from '../policies/Policy';

class Dashboard extends Component {
    render() {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        const role = sessionStorage.getItem("ROLE");
        if (isLoggedIn && role === "agent") {
            return (
                <div>
                    <WebsiteNav />

                    <div className="container my-5 py-1">
                        <div className="row">
                            <div className="col-sm-9">
                                <Policy />
                            </div>
                            <div className="col-sm-3">
                                <Score />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (isLoggedIn && role === "admin") {
            return (
                <>
                    <WebsiteNav />
                    <div className='container my-2'>
                        <h1>Admin User</h1>
                    </div>
                </>
            )
        }
        else {
            <Navigate to="/logout" />
        }
    }
}

export default Dashboard;