import React, { useEffect, useState } from "react";
import CertificateResponseList from "./CertificateResponseList";

export default function CerrtificateResponse() {
    const [certificate, setCertificate] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const page = window.location.pathname;
    var url = "";
    if (page === "/dashboard") {
        url = "https://spring-seller-certification.herokuapp.com/admin/certificate/no_verify";
    }
    if (page === "/allcertificate") {
        url = "https://spring-seller-certification.herokuapp.com/admin/certificate/all";
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