import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import axios from "axios";

export default function Signup() {
    const redir = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const nameInputRef = useRef();
    const aadharInputRef = useRef();
    const panInputRef = useRef();
    const phoneInputRef = useRef();
    const occupationInputRef = useRef();
    const genderInputRef = useRef();
    const statusInputRef = useRef();

    async function submitHandler(event){
        event.preventDefault();
        const baseURL = "http://localhost:8081/agent/new";
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const conPassword = confirmPasswordInputRef.current.value;
        const agentName = nameInputRef.current.value;
        const aadhar = aadharInputRef.current.value;
        const pan = panInputRef.current.value;
        const phone = phoneInputRef.current.value;
        const occupation = occupationInputRef.current.value;
        const gender = genderInputRef.current.value;
        const agentStatus = statusInputRef.current.value;
        if(password !== conPassword){
            alert("Password Incorrect");
            passwordInputRef.current.value = "";
            confirmPasswordInputRef.current.value = "";

        }
        const data = {
            name: agentName,
            email: email,
            password: password,
            aadharNo: aadhar,
            panNo: pan,
            phoneNo: phone,
            occation: occupation,
            status: agentStatus,
            gender: gender
        };
        axios({
            url: baseURL,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        })
            .then((response) => {
                // console.log(response);
                alert("Success! You have been register");
                redir("/");
            })
            .catch((error) => {
                console.error(error.response);
            });



    }

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-md-6 mt-1">
                        <h1 className="text-center">Signup</h1>
                        <div className="container p-5">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" ref={emailInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="userPassword" ref={passwordInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" ref={confirmPasswordInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="Text" className="form-control" id="name" ref={nameInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="aadharNo" className="form-label">Aadhar No</label>
                                    <input type="number" className="form-control" id="aadharNo" ref={aadharInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="panNo" className="form-label">Pan No</label>
                                    <input type="text" className="form-control" id="panNo" ref={panInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phnNo" className="form-label">Phone no</label>
                                    <input type="tel" className="form-control" id="phnNo" ref={phoneInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="occupation" className="form-label">Occupation</label>
                                    <input type="text" className="form-control" id="occupation" ref={occupationInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className="form-select" aria-label="Default select example" id="gender" ref={genderInputRef}>
                                        <option>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select className="form-select" aria-label="Default select example" id="status" ref={statusInputRef}>
                                        <option>Select Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                </div>
                                <button className="btn btn-warning">Submit</button>

                            </form>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>
    )
}