import verified from '../../verified.png';

export default function CertificateItem(props) {
    return (
        <>
            <li>
                <div className="container border border-3 rounded-1">
                    <div className="row">
                        <div className="col-9">
                            <div className="container">
                                <div className="col-4">
                                    <p className="fs-4 fw-light">{props.certificateName}</p>
                                </div>
                                <div className="col-4">
                                    <p className="fs-2 fw-bold">{props.licenseNo}</p>
                                </div>
                                <div className="col-4">
                                    <p className="fs-4 fw-light">{props.validTillYear}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 my-auto">
                            <img className="img-fluid" src={verified} alt="verified" />
                        </div>
                    </div>
                </div>
            </li>
            <br />
        </>
    )
}