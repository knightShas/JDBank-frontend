import { Navigate } from 'react-router-dom';
import { Component } from "react";
import WebsiteNav from "../WesiteNav";
import Score from "./Score";
import Policy from '../policies/Policy';
import CertificateResponse from '../admin/Certificate/CertificateResponse';
import Agent from '../admin/Agent/Agent';
import TopPerformer from '../admin/TopPerformer';

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
                        <div className="row">
                            <div className="col-sm-5">
                                <CertificateResponse />
                            </div>
                            <div className="col-sm-7">
                                <Agent />
                            </div>
                        </div>
                    </div>
                    <div className='container my-3'>
                        <TopPerformer />
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