import React from "react";
import {Table} from "react-bootstrap";

/**
 * User list rows
 * @param users
 * @returns {*}
 * @constructor
 */
function UserList({users}) {
    const userRows = users?.rows.map(function (item) {
        return (
            <tr key={item.id}>
                <td className="users__list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#057d36"
                         className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path
                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                </td>
                <td width="60%"><strong>{item?.login}</strong><br />{item?.name}</td>
                <td>...<br/>Default group</td>
            </tr>
        );
    });

    return (
        <Table striped hover>
            <tbody>
                <tr><td colSpan={3} className="users__list-head-row"/></tr>
                {userRows}
            </tbody>
        </Table>
    )
}

export default UserList;