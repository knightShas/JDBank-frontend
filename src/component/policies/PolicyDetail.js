import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import WebsiteNav from '../WesiteNav';

export default function PolicyDetail(){
    const location = useLocation();
    const {policyNo} = location.state;
    const [policy, setPolicy] = useState([]);

    useEffect(() => {
        const url = "https://ec2-35-165-164-205.us-west-2.compute.amazonaws.com:8081/detail/"+policyNo;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setPolicy(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <WebsiteNav />
            <div className="container">
                <div className="col-lg-12 mx-5 py-3 bg-light">
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Policy Name</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.policyName}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Policy No</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.policyNo}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Customer Email</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.customerEmail}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Customer Name</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.customerName}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Customer Pan No</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.customerPanNo}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Customer Phone No</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.customerPhoneNo}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Insurance Amount</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.insuranceAmount}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Insurared for year</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.noOfYear} &#40;year&#41;</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><p className="fs-3">Reward</p></div>
                        <div className="col-md-2"><h3>:</h3></div>
                        <div className="col-md-5"><p className="fs-1 fw-light">{policy.rewardPoint}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}