import React, { useEffect, useState } from "react";
import CertificateResponseList from "./CertificateResponseList";

export default function CerrtificateResponse() {
    const [certificate, setCertificate] = useState([]);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        const url = "http://localhost:8081/admin/certificate/no_verify";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json.length);
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