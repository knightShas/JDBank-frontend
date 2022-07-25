import CertificateItem from "./CertificateItem";
import './Certificate.css';

export default function CertificateList(props){
    return(
        <>
        <div>
            <ul className="certificate-ul">
                {props.data.map((item) =>(
                <CertificateItem
                    key = {item.id}
                    certificateName = {item.certificateName}
                    licenseNo = {item.licenseNo}
                    agentName = {item.agentName}
                    issueDate = {item.issueDate}
                    validTillYear = {item.validTillYear}
                    verified = {item.verified}
                />
                ))}
            </ul>
        </div>
        </>
    )
}