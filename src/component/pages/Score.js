import React, { useEffect, useState } from "react";

function Score() {
    const [point, setPoint] = useState(0);
    useEffect(() => {
        const agent_email = sessionStorage.getItem("Agent_Email");
        const url = "https://54.149.229.8:8081/reward/"+agent_email;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json);
                setPoint(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="container my-5 py-1">
                <div className="col-sm-12 py-5 bg-light">
                    <h5 className="py-2 text-center">Rewards</h5>
                    <h1 className="fs-1 fw-bolder text-center">{point}</h1>
                </div>
            </div>
        </>
    )
}
export default Score;