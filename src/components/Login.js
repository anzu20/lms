import './Login.css';
import React, {useState} from "react";
import {checkCredentials} from "../helpers/Api";
import {Redirect} from "react-router-dom";
import {Alert} from "react-bootstrap";

/**
 * Login page component
 * @returns {JSX.Element}
 * @constructor
 */
function Login() {
    const [error, setError] = useState(false);
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(0);
    const [redirect, setRedirect] = useState(false);

    /**
     * Handle form submit
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check login and password
        checkCredentials({login, password, rememberMe}).then(result => {
            if (result) {
                setRedirect(true);
            } else {
                setError(true);
            }
        });
    }

    // Redirect to user list on successful login
    if (redirect) {
        return <Redirect to="/users" />
    }


    return (
        <div className="login-wrapper">
            <div className="login-header" />
            <div className="login-header-text">Welcome to the Learning Management System</div>
            <div className="login-header-subtext">Please log in to continue</div>
            <form className="login-form">
                {error ? <Alert variant="danger">Incorrect username or password</Alert> : ""}
                <div className="login-form__input-group">
                    <span className="login-form__logo-user" />
                    <input
                        className="login-form__input"
                        name="username"
                        placeholder="Username"
                        type="text"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="login-form__input-group">
                    <span className="login-form__logo-password" />
                    <input
                        className="login-form__input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-form__checkbox-group">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        onChange={(e) => setRememberMe(+e.target.checked)}
                    />
                    <label htmlFor="remember" className="login-form__checkbox-label">Remember me</label>
                </div>
                <button className="login-form__button" onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    );
}

export default Login;