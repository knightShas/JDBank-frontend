import { Link } from "react-router-dom";

export default function AgentItem(props) {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.phoneNo}</td>
                <td>{props.panNo}</td>
                <td>{props.email}</td>
                <td>
                    <Link className="mx-2" to="#">View</Link>
                    <Link className="mx-2" to="#">Approve</Link>
                </td>
            </tr>
        </>
    )
}