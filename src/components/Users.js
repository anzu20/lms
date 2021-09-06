import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import {checkCredentials, getUserList} from "../helpers/Api";
import {Pagination} from "react-bootstrap";
import './Users.css';
import Logout from "./Logout";
import UserList from "./UserList";
import PaginationItems from "./PaginationItems";

function Users() {
    const [activePage, setActivePage] = useState(1);
    const [loggingOut, setLoggingOut] = useState();
    const [redirect, setRedirect] = useState(false);
    const [users, setUsers] = useState();

    useEffect(() => {
        // Check login
        checkCredentials().then(result => {
            if (result) {
                getUserList(activePage).then(result => setUsers(result));
            } else {
                setRedirect(true);
            }
        });
    }, [activePage, loggingOut]);

    // If the user is not logged in, redirect to login page
    if (redirect) {
        return <Redirect to="/login" />
    }

    if (users && Object.keys(users).length !== 0) {
        const count = users?.count ? Math.ceil(users.count / 5) : 1;
        if (count > 1) {
            return (
                <div className="wrapper">
                    <div className="users">
                        <h1 className="users__header">User list</h1>
                        <div className="users__list">
                            <UserList users={users} />
                            <Pagination className="users__list-pagination">
                                <PaginationItems count={count} activePage={activePage} setActivePage={setActivePage} />
                            </Pagination>
                        </div>
                    </div>
                    <Logout setLoggingOut={setLoggingOut} />
                </div>
            );
        }
    }

    return null;
}

export default Users;