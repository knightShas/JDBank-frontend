export default function Signup() {
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-md-6 mt-1">
                        <h1 className="text-center">Signup</h1>
                        <div className="container p-5">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="userPassword" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="Text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="aadharNo" className="form-label">Aadhar No</label>
                                    <input type="number" className="form-control" id="aadharNo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="panNo" className="form-label">Pan No</label>
                                    <input type="text" className="form-control" id="panNo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phnNo" className="form-label">Phone no</label>
                                    <input type="tel" className="form-control" id="phnNo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="occupation" className="form-label">Occupation</label>
                                    <input type="text" className="form-control" id="occupation" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className="form-select" aria-label="Default select example">
                                    <option>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <input type="text" className="form-control" id="status" />
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