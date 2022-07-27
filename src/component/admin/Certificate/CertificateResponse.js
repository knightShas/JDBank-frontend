import React, { useEffect, useState } from "react";
import CertificateResponseList from "./CertificateResponseList";

export default function CerrtificateResponse() {
    const [certificate, setCertificate] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const page = window.location.pathname;
    var url = "";
    if (page === "/dashboard") {
        url = "http://ec2-35-89-199-189.us-west-2.compute.amazonaws.com:8081/admin/certificate/no_verify";
    }
    if (page === "/allcertificate") {
        url = "http://ec2-35-89-199-189.us-west-2.compute.amazonaws.com:8081/admin/certificate/all";
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                if (json.length === 0) {
                    setFetchError(true);
                }
                else {
                    setCertificate(json);
                }
            } catch (error) {
                setFetchError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {fetchError ? <></> : <>
                <div className="container py-3 bg-light">
                    <CertificateResponseList data={certificate} />
                </div>
            </>}

        </>
    );
}