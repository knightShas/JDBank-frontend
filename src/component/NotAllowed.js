import WebsiteNav from "./WesiteNav";

export default function NotAllowed(){
    return(
        <>
            <WebsiteNav />
            <div className="container mt-5">
                <h1 className="fs-1 text-center">You are not Authorize !</h1>
                <p className="fs-4 text-center">Please wait for admin to authorize you!</p>
            </div>
        </>
    )
}