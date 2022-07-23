// import { Link } from "react-router-dom";
import './Login.css';

function Login() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-md-6 my-5">
                        <h1 className="text-center">Login</h1>
                        <div className="container my-5 p-5">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="userPassword" />
                                </div>
                                <button className="btn btn-warning btn-center-login">Submit</button>

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
export default Login;