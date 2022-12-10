import React from 'react';

const TableRow = ({ data }) => {


    return (
        data?.map(client => <tr key={client.id}>

            <td>{client.first_name}</td>
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