import { Link, useNavigate} from "react-router-dom";
import { useRef } from 'react';
import axios from "axios";

function Login() {
    const redir = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "http://localhost:8081/agent";
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const data = {
            email: enteredEmail,
            password: enteredPassword,
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
                console.log(response);
                alert("Login Success");
                sessionStorage.setItem("ROLE",response.data.agent['role']);
                sessionStorage.setItem("Agent_Email", response.data.agent['email']);
                sessionStorage.setItem("Agent_Name", response.data.agent['name']);
                sessionStorage.setItem("Authorize",response.data['encodeString']);
                sessionStorage.setItem("isLoggedIn", true);
                localStorage.setItem("AgentAadharNo", response.data.agent["aadharNo"]);
                localStorage.setItem("AgentPanNo", response.data.agent["panNo"]);
                localStorage.setItem("AgentPhoneNo", response.data.agent["phoneNo"]);
                localStorage.setItem("AgentOccation", response.data.agent["occation"]);
                localStorage.setItem("AgentStatus", response.data.agent["status"]);
                localStorage.setItem("AgentGender", response.data.agent["gender"]);

                redir("/dashboard");
            })
            .catch((error) => {
                // console.error(error.response.status);
                if(error.response.status === 403){
                    redir("/notallowed");
                }
                else{
                    alert(error.response.data);
                }
            });

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-md-6 my-5">
                        <h1 className="text-center">Login</h1>
                        <div className="container my-5 p-5">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" ref={emailInputRef}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="userPassword" ref={passwordInputRef}/>
                                </div>
                                <button className="btn btn-warning">Submit</button>
                                
                            </form>
                        <div className="mt-4"><small>New Agent, <Link to="/signup">Signup</Link> Please!</small></div>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;