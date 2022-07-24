import { Link } from "react-router-dom";
import './Policy.css';

export default function PolicyItem(props) {
    return (
        <>
            <tr>
                <td>{props.policyNo}</td>
                <td>{props.policyName}</td>
                <td>{props.customerName}</td>
                <td>{props.insuranceAmount}</td>
                <td>{props.rewardPoint}</td>
                <td><Link className="policy-link" to="/detail" state={{policyNo: props.policyNo}}>View Detail</Link></td>
            </tr>
        </>
    )
}