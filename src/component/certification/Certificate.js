import React, { useEffect, useState } from "react";
import WebsiteNav from "../WesiteNav";
import CertificateList from "./CertificateList";

export default function Certificate() {
    const [certificates, setCerticates] = useState([]);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        const agent_email = sessionStorage.getItem("Agent_Email");
        const url = "http://localhost:8081/certification/" + agent_email;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
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
                <CertificateList data = {certificates}/>
            </div>
        </>
    )
}