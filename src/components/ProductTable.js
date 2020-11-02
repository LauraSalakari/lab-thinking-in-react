import React from 'react'

export default function ProductTable(props) {
    return (
        <div>
            <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
                {props.producs.map((elem) => {
                    return <tr key={elem.id}>
                        <td>{elem.name}</td>
                        <td>{elem.price}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}
