import CertificateResponseItem from "./CertificateResponseItem";
import axios from "axios";

export default function CertificateResponseList(props) {
    const page = window.location.pathname;

    function handleClick() {
        const url = "https://spring-seller-certification.herokuapp.com/admin/certificate/verify/bulk";
        axios({
            url: url,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }
    if (page === "/dashboard") {
        return (
            <>
                <h5 className="py-3 text-center">Pending Certificate</h5>
                <div>
                    <ul>
                        {props.data.map((item) => (
                            <CertificateResponseItem
                                key={item.id}
                                agentName={item.agentName}
                                agentEmail={item.agentEmail}
                                certificateName={item.certificateName}
                                licenseNo={item.licenseNo}
                                customerEmail={item.customerEmail}
                                issueDate={item.issueDate}
                            />
                        ))}
                    </ul>
                </div>
                <div className="col-sm-12 mt-3">
                    <button className="btn btn-primary btn-large" onClick={handleClick}>Verify All</button>
                </div>
            </>
        )
    }
    if (page === "/allcertificate") {
        return (
            <>
                <h5 className="py-3 text-center">Agent's Certificate</h5>
                <div>
                    <ul>
                        {props.data.map((item) => (
                            <CertificateResponseItem
                                key={item.id}
                                agentName={item.agentName}
                                agentEmail={item.agentEmail}
                                certificateName={item.certificateName}
                                licenseNo={item.licenseNo}
                                customerEmail={item.customerEmail}
                                issueDate={item.issueDate}
                                verified={item.verified}
                                expire={item.expire}
                            />
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}