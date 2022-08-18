import {useNavigate} from "react-router-dom";
import { useRef } from 'react';
import axios from "axios";
import WebsiteNav from "../WesiteNav";
import './Certificate.css';

export default function NewCertificate() {

    const redir = useNavigate();
    const certificateNameRef = useRef();
    const licenseNoInputRef = useRef();
    const issueDateRef = useRef();
    const validTillRef = useRef();
    const authorize = sessionStorage.getItem('Authorize');

    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "https://54.149.229.8:8081/certification/new";
        const certificateName = certificateNameRef.current.value;
        const licenseNoInput = licenseNoInputRef.current.value;
        const issueDate = issueDateRef.current.value;
        const validtill = validTillRef.current.value;
        // const validtill = date.getFullYear();

        const data = {
            certificateName: certificateName,
            licenseNo: licenseNoInput,
            issueDate: issueDate,
            validTillYear: validtill,
            agentName: sessionStorage.getItem("Agent_Name"),
            agentPhoneNo: localStorage.getItem("AgentPhoneNo"),
            agentPanNo: localStorage.getItem("AgentPanNo"),
            agentEmail: sessionStorage.getItem("Agent_Email"),
            expire: false
        };
        axios({
            url: baseURL,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorize":authorize
            },
            data: data,
        })
            .then((response) => {
                // console.log(response);
                alert("New Certificate Added");
                redir("/dashboard");
            })
            .catch((error) => {
                // console.log();
                alert(error.response.data);
            });

    }

    return (
        <>
            <WebsiteNav />
            <div className="container mt-5">
                <h2 className="fw-light text-center">New Certificate</h2>
                <div className="row">
                    <div className="col-lg-6 my-5">
                        <img src="https://img.freepik.com/free-vector/online-courses-cartoon-composition-with-graduate-student-climbing-textbooks-pile-get-diploma-from-monitor_1284-27833.jpg?t=st=1658725223~exp=1658725823~hmac=dbb69804bec5b5918edf2bd80a70368f0cb6080a65dd5b4b9175e956e96eccbc&w=996" alt="candidate" className="image" />
                    </div>
                    <div className="col-sm-6 my-5">
                        <div className="container my-4 p-5">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="certificatename" className="form-label">Certificate Name</label>
                                    <input type="text" className="form-control" id="certificatename" ref={certificateNameRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="licenseno" className="form-label">License No</label>
                                    <input type="text" className="form-control" id="licenseno" ref={licenseNoInputRef}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="issueDate" className="form-label">Issue Date</label>
                                    <input type="date" className="form-control" id="issueDate" ref={issueDateRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="validtill" className="form-label">Valid Till</label>
                                    <input type="date" className="form-control" id="validtill" ref={validTillRef} />
                                </div>
                                <br />
                                <button className="btn btn-warning">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}