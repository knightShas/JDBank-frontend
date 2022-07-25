import CertificateResponseItem from "./CertificateResponseItem";
import axios from "axios";

export default function CertificateResponseList(props) {

    function handleClick() {
        const url = "http://localhost:8081/admin/certificate/verify/bulk";
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