import PolicyItem from "./PolicyItem";

export default function PolicyList(props) {
    return (
        <>
            <h5 className="py-3 text-center">Logged Policies</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Policy No.</th>
                        <th scope="col">Policy Name</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Point</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {props.data.map((item) => (
                    <PolicyItem 
                        key = {item.id}
                        policyName = {item.policyName}
                        policyNo = {item.policyNo}
                        agentPanNo = {item.agentPanNo}
                        customerName = {item.customerName}
                        customerEmail = {item.customerEmail}
                        insuranceAmount = {item.insuranceAmount}
                        rewardPoint = {item.rewardPoint}
                    />
                ))}
                </tbody>
            </table>
        </>
    )
}