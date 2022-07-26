import WebsiteNav from "../WesiteNav";
import Agent from "./Agent/Agent";

export default function AgentPage(){
    return(
        <>
            <WebsiteNav />
            <div className="container">
                <Agent />
            </div>

        </>
    )
}