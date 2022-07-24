import WebsiteNav from "../WesiteNav";

export default function Profile() {
    return (
        <>
            <WebsiteNav />
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
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