import { useLocation } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import WebsiteNav from '../../WesiteNav';
import './Agent.css';

export default function AgentDetail() {
    const authorize = sessionStorage.getItem('Authorize');
    const location = useLocation();
    const { agentEmail } = location.state;
    const [agent, setAgent] = useState([]);
    const agentEmailRef = useRef();

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("authorize", authorize);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        const url = "http://localhost:8081/admin/agent/" + agentEmail;

        const fetchData = async () => {
            try {
                const response = await fetch(url, requestOptions);
                const json = await response.json();
                setAgent(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    function handleClick() {

        const agentEmail = agentEmailRef.current.value;
        const url = "http://localhost:8081/admin/agent/authorize/" + agentEmail;
        axios({
            url: url,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorize": authorize,
            },
        })
            .then((response) => {
                // console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }

    return (
        <>
            <WebsiteNav />
            <div className="container">
                <div className="col-lg-12 mx-5 py-3 bg-light">
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Name</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.name}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Email</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.email}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Aadhar No</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.aadharNo}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Pan No</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.panNo}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Phone No</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.phoneNo}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Occation</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.occation}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Status</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.status}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Gender</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{agent.gender}</p></div>
                    </div>
                </div>
                <div className="container mt-3">
                    {agent.authorize === false ?
                        <>
                            <div className="container agent-det-approv">
                                <input type="hidden" value={agent.email} ref={agentEmailRef} />
                                <button className="btn btn-success btn-lg mx-2" onClick={handleClick}>Authorize</button>
                            </div>
                        </> : <></>
                    }
                </div>
            </div>
        </>
    )
}