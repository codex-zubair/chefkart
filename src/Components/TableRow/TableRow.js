import React from 'react';
import './table.css';



const TableRow = ({ data, colorChangeHandler }) => {






    return (
        data?.map(client => <tr className="tableHover"

            onClick={(event) => colorChangeHandler(event, client.status)} key={client.id}>

            <td> {client.first_name}</td>
            <td>{client.last_name}</td>
            <td>{client.gender}</td>
            <td>{client.first_name + " " + client.last_name}</td>
            <td>{client.mobile}</td>
            <td>{client.time}</td>
            <td>{client.ip_address}</td>
            <td>{client.area}</td>

        </tr>)
    );
};

export default TableRow;