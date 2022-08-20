import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import './Agent.css';

export default function AgentItem(props) {
    const agentEmailRef = useRef();
    const authorize = sessionStorage.getItem('Authorize');
    const page = window.location.pathname;

    function handleClick() {
        const agentEmail = agentEmailRef.current.value;
        const url = "https://34.216.42.79:8081/admin/agent/authorize/" + agentEmail;
        axios({
            url: url,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorize":authorize,
            },
        })
            .then((response) => {
                // console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }

    function handleDeleteClick() {
        const agentEmail = agentEmailRef.current.value;
        const url = "https://34.216.42.79:8081/admin/agent/delete/" + agentEmail;
        axios({
            url: url,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorize":authorize,
            },
        })
            .then((response) => {
                // console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }
    if (page === "/dashboard") {
        return (
            <>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.phoneNo}</td>
                    <td>{props.panNo}</td>
                    <td>{props.email}</td>
                    <td>
                        <input type="hidden" value={props.email} ref={agentEmailRef} />
                        <Link className="agent-link fw-bold mx-2" to="/agent/detail" state={{ agentEmail: props.email }}>View</Link>
                        <button className="btn btn-success btn-sm mx-2" onClick={handleClick}>Authorize</button>
                    </td>
                </tr>
            </>
        )
    }
    if (page === "/agent") {
        return (
            <>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.phoneNo}</td>
                    <td>{props.panNo}</td>
                    <td>{props.email}</td>
                    <td>
                        <input type="hidden" value={props.email} ref={agentEmailRef} />
                        <Link className="agent-link fw-bold mx-2" to="/agent/detail" state={{ agentEmail: props.email }}>View</Link>
                        {props.authorize === false ? <>
                            <button className="btn btn-success btn-sm mx-2" onClick={handleClick}>Authorize</button>
                        </> : <>
                            <button className="btn btn-danger btn-sm mx-2" onClick={handleDeleteClick}>Delete</button>
                        </>}
                    </td>
                </tr>
            </>
        )
    }
}