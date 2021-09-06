/**
 * Check login status
 * @param data login data such as login and password
 * @returns {Promise<boolean>}
 */
export const checkCredentials = (data) => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString()
    }).then((response) => {
        return response.status === 200;
    });
}

/**
 * Request user list
 * @param page
 * @returns {Promise<any>}
 */
export const getUserList = (page) => {
    return fetch(`${process.env.REACT_APP_API_URL}/users?page=${page}`, {
        method: "GET",
        credentials: 'include'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
}

/**
 * Log out current user
 * @returns {Promise<boolean>}
 */
export const logOut = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth`, {
        method: "DELETE",
        credentials: 'include'
    }).then((response) => {
        return response.status === 200;
    });
}
