import verifiedIcon from '../../verified.png';
import unapproved from '../../noapproved.png';

export default function CertificateItem(props) {
    const date = new Date(props.validTillYear);
    const validTillYear = date.toISOString().slice(0, 10);
    return (
        <>
            <li>
                <div className="container border border-3 rounded-1 bg-light">
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
                                    <p className="fs-4 fw-light">{validTillYear}</p>
                                </div>
                            </div>
                        </div>
                        {props.verified ? <>
                        <div className="col-3 my-auto">
                            <img className="img-fluid" src={verifiedIcon} alt="verified" />
                        </div>
                        </>:<>
                        <div className="col-3 my-auto">
                            <img className="img-fluid" src={unapproved} alt="not-verified" />
                        </div>
                        </>
                        }
                        
                    </div>
                </div>
            </li>
            <br />
        </>
    )
}