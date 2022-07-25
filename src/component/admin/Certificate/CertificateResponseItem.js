import { useRef } from "react";
import axios from "axios";


export default function CertificateResponseItem(props) {
    const date = new Date(props.issueDate);
    const issueDate = date.toISOString().slice(0, 10);

    const licenseRef = useRef();

    function handleClick() {
        const licenseNo = licenseRef.current.value;
        const url = "http://localhost:8081/admin/certificate/verify/" + licenseNo;
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