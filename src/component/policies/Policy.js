import PolicyList from "./PolicyList";
import React, { useEffect, useState } from "react";

function Policy() {
    const [policy, setPolicy] = useState([]);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        const agent_email = sessionStorage.getItem("Agent_Email");
        const url = "https://ec2-54-71-85-155.us-west-2.compute.amazonaws.com:8081/policies/"+agent_email;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json);
                setPolicy(json);
            } catch (error) {
                setFetchError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container my-5 py-2">
                {fetchError?
                <>
                    <h1 className="fs-3 my-5">No Logged Policy</h1>
                </>:<PolicyList data = {policy}/>
                }
            </div>
        </>
    )
}
export default Policy;