import WebsiteNav from "../WesiteNav";
import { useRef, useState } from 'react';
import axios from "axios";

export default function Profile() {
    const [name, setName] = useState(sessionStorage.getItem("Agent_Name"));
    const [phone, setPhone] = useState(localStorage.getItem("AgentPhoneNo"));
    const [occupation, setOccupation] = useState(localStorage.getItem("AgentOccation"));
    const [status, setStatus] = useState(localStorage.getItem("AgentStatus"));
    // const nameRef = useRef();
    // const emailRef = useRef();
    // const phoneRef = useRef();
    // const aadharnoRef = useRef();
    // const pannoRef = useRef();
    // const occupationRef = useRef();
    // const statusRef = useRef();
    // const genderRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const baseURL = "https://ec2-54-191-159-56.us-west-2.compute.amazonaws.com:8081/agent/edit"
        const data={
            name:name,
            email:sessionStorage.getItem("Agent_Email"),
            aadharNo:localStorage.getItem("AgentAadharNo"),
            panNo:localStorage.getItem("AgentPanNo"),
            phoneNo:phone,
            occation:occupation,
            status:status,
            gender:localStorage.getItem("AgentGender")
        };
        axios({
            url: baseURL,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        })
            .then((response) => {
                console.log(response);
                sessionStorage.setItem("Agent_Email", response.data['email']);
                sessionStorage.setItem("Agent_Name", response.data['name']);
                localStorage.setItem("AgentAadharNo", response.data["aadharNo"]);
                localStorage.setItem("AgentPanNo", response.data["panNo"]);
                localStorage.setItem("AgentPhoneNo", response.data["phoneNo"]);
                localStorage.setItem("AgentOccation", response.data["occation"]);
                localStorage.setItem("AgentStatus", response.data["status"]);
                localStorage.setItem("AgentGender", response.data["gender"]);
                window.location.reload();
            })
            .catch((error) => {
                // console.log();
                alert(error.response.data);
            });

      }

    return (
        <>
            <WebsiteNav />
            <div className="container mt-2">
                <h3 className="fw-light text-center">Profile Detail</h3>

                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} id="name" onChange={(e)=>setName(e.currentTarget.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">email</label>
                                <input type="email" className="form-control" value={sessionStorage.getItem("Agent_Email")} id="email" readOnly/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone No</label>
                                <input type="tel" className="form-control" value={phone} id="phone"  onChange={(e)=>setPhone(e.currentTarget.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="aadhar" className="form-label">Aadhar No</label>
                                <input type="number" className="form-control" value={localStorage.getItem("AgentAadharNo")} id="aadhar" readOnly/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="panno" className="form-label">Pan No</label>
                                <input type="text" className="form-control" value={localStorage.getItem("AgentPanNo")} id="panno" readOnly/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="occupation" className="form-label">Occupation</label>
                                <input type="text" className="form-control" value={occupation} id="occupation"  onChange={(e)=>setOccupation(e.currentTarget.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Status</label>
                                <input type="text" className="form-control" value={status} id="status"  onChange={(e)=>setStatus(e.currentTarget.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select className="form-select" aria-label="Default select example" disabled>
                                    <option defaultValue={localStorage.getItem("AgentGender")}>{localStorage.getItem("AgentGender")}</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>
    )
}