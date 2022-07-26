import AgentItem from "./AgentItem";
import axios from "axios";

export default function AgentList(props){
    if(props === undefined){
        console.log(props);
    }
    const page = window.location.pathname;
    function handleClick() {
        const url = "http://localhost:8081/admin/agent/authorize/bulk";
        axios({
            url: url,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                // window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }
    if(page === "/dashboard"){
        return(
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Pan No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map((item) => (
                        <AgentItem
                            key = {item.id}
                            name = {item.name}
                            phoneNo = {item.phoneNo}
                            panNo = {item.panNo}
                            email = {item.email}
                        />
                    ))}
                    </tbody>
                </table>
                <div className="col-sm-12 mt-3">
                    <button className="btn btn-primary btn-large" onClick={handleClick}>Authorize All</button>
                </div>
            </>
        )
    }
    if(page === "/agent"){
        return(
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Pan No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map((item) => (
                        <AgentItem
                            key = {item.id}
                            name = {item.name}
                            phoneNo = {item.phoneNo}
                            panNo = {item.panNo}
                            email = {item.email}
                            authorize = {item.authorize}
                        />
                    ))}
                    </tbody>
                </table>
            </>
        )
    }
}