import WebsiteNav from "../WesiteNav";
import CerrtificateResponse from "./Certificate/CertificateResponse";

export default function CertificatePage(){
    return(
        <>
            <WebsiteNav />
            <div className="container">
                <CerrtificateResponse />
            </div>

        </>
    )  
}