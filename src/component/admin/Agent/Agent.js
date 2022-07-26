import React, { useEffect, useState } from "react";
import AgentList from "./AgentList";

export default function Agent() {
    const [agents, setAgents] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const page = window.location.pathname;
    var url = "";
    if (page === "/dashboard") {
        url = "http://localhost:8081/admin/agent/unauthorize";
    }
    if (page === "/agent") {
        url = "http://localhost:8081/admin/agent/all";
    }

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(url);
                const json = await response.json();
                setAgents(json);
            } catch (error) {
                // console.error(error);
                setFetchError(true);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {fetchError ? <></> :
                <div className="container py-3 bg-light">
                    {page === "/dashboard" ? <>
                        <h5 className="py-3 text-center">Pending Authorize Agent List</h5>
                    </> :
                        <><h5 className="py-3 text-center">Agent List</h5>
                        </>
                    }
                    <><AgentList data={agents} /></>
                </div>
            }

        </>
    )
}