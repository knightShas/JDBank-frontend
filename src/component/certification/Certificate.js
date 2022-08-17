import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebsiteNav from "../WesiteNav";
import CertificateList from "./CertificateList";
import './Certificate.css';

export default function Certificate() {
    const [certificates, setCerticates] = useState([]);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        const agent_email = sessionStorage.getItem("Agent_Email");
        const authorize = sessionStorage.getItem('Authorize');
        const url = "https://ec2-35-89-10-119.us-west-2.compute.amazonaws.com:8081/certification/" + agent_email;

        const fetchData = async () => {
            var myHeaders = new Headers();
            myHeaders.append("authorize", authorize);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
            };
            try {
                const response = await fetch(url, requestOptions);
                const json = await response.json();
                // console.log(json);
                setCerticates(json);
            } catch (error) {
                console.error(error);
                setFetchError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <WebsiteNav />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-9">
                        <CertificateList data={certificates} />
                    </div>
                    <div className="col-lg-3 px-5">
                        <div className="container m-2 p-4 py-5 btn btn-warning certificate-new">
                            <Link className="certificate-link fw-bold" to="/new" style={{ color: "black" }}>Add Certificate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}