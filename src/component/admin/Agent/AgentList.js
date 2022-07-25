import AgentItem from "./AgentItem";

export default function AgentList(props){
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
        </>
    )
}