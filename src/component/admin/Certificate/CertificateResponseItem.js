import { useRef } from "react";
import axios from "axios";


export default function CertificateResponseItem(props) {
    const date = new Date(props.issueDate);
    const issueDate = date.toISOString().slice(0, 10);
    const licenseRef = useRef();
    const page = window.location.pathname;

    function handleClick() {
        const licenseNo = licenseRef.current.value;
        const url = "https://ec2-34-220-127-234.us-west-2.compute.amazonaws.com:8081/admin/certificate/verify/" + licenseNo;
        axios({
            url: url,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                // console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }

    function handleExpireClick(){
        const licenseNo = licenseRef.current.value;
        const url = "https://ec2-34-220-127-234.us-west-2.compute.amazonaws.com:8081/admin/certificate/expire/" + licenseNo;
        axios({
            url: url,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                // console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }

    function handleDeleteClick(){
        const licenseNo = licenseRef.current.value;
        const url = "https://ec2-34-220-127-234.us-west-2.compute.amazonaws.com:8081/admin/certificate/delete/" + licenseNo;
        axios({
            url: url,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                // console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }

    if (page === "/dashboard") {
        return (
            <>
                <li className="my-2">
                    <div className="card">
                        <h5 className="card-header">{props.licenseNo}</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-10">
                                    <h5 className="card-title">{props.certificateName} Certificate</h5>
                                    <p className="card-text">Agent: {props.agentName} - {props.agentEmail}</p>
                                    <p className="card-text"> Issued Date: {issueDate}</p>
                                </div>
                                <div className="col-sm-2 my-4">
                                    <input type="hidden" value={props.licenseNo} ref={licenseRef} />
                                    <button className="btn btn-success" onClick={handleClick}>Verify</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </>
        )
    }
    if (page === "/allcertificate") {
        return (
            <>
                <li className="my-3">
                    <div className="card">
                        <h5 className="card-header">{props.licenseNo}</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-9">
                                    <h5 className="card-title">{props.certificateName} Certificate</h5>
                                    <p className="card-text">Agent: {props.agentName} - {props.agentEmail}</p>
                                    <p className="card-text"> Issued Date: {issueDate}</p>
                                </div>
                                <div className="col-sm-3 my-4">
                                    <input type="hidden" value={props.licenseNo} ref={licenseRef} />
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="row">
                                                <div className="col-6">
                                                    {props.verified ? <></> : <>
                                                        <button className="btn btn-success" onClick={handleClick}>Verify</button>
                                                    </>
                                                    }
                                                </div>
                                                <div className="col-6">
                                                    {props.expire ? <></> : <>
                                                        <button className="btn btn-warning" onClick={handleExpireClick}>Expire</button>
                                                    </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </>
        )
    }
}