<?php

namespace Lms\Controllers;

use Lms\Common\Response;
use Lms\Models\User;

/**
 * Auth controller
 */
class Auth
{
    /**
     * Log in and log out user
     */
    public static function main()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Log in on POST request
            $user = new User();
            $user->login = $_POST['login'] ?? '';
            $user->password = $_POST['password'] ?? '';
            $user->remember = $_POST['rememberMe'] ?? false;

            if (!empty($_COOKIE['user']) || $user->login()) {
                Response::sendResponse(200, 'ok');
            } else {
                Response::sendResponse(401, 'Incorrect username or password');
            }
        } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            // Log out on DELETE request
            setcookie('user', null, -1, '/');
            Response::sendResponse(200, 'ok');
        }
    }
}