function Policy() {
    return (
        <>
            <div className="container my-5 py-2">
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
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>10</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>20</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Policy;