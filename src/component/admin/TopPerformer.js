import React, { useEffect, useState } from "react";

export default function TopPerformer() {
    const [agent, setAgent] = useState([]);
    const [point, setPoint] = useState(0);

    useEffect(() => {
        const url = "https://spring-seller-certification.herokuapp.com/admin/agent/top/performer";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json.length);
                setAgent(json);
                const rewardUrl = "https://spring-seller-certification.herokuapp.com/reward/" + json['email'];
                try {
                    const response = await fetch(rewardUrl);
                    const reward = await response.json();
                    // console.log(json);
                    setPoint(reward);
                } catch (error) {
                    console.log("error", error);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="container my-2">
                <h2 className="text-center">Top Performer</h2>
                <div className="card">
                    <h5 className="card-header">{agent.name}</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-10 my-3">
                                <h5 className="card-title">Email: {agent.email}</h5>
                                <p className="card-text">Phone: {agent.phoneNo}</p>
                            </div>
                            <div className="col-sm-2 bg-light">
                                <div className="container">
                                    <h4 className="text-center">Reward</h4>
                                    <h1 className="text-center">{point}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}