<?php

namespace Lms\Controllers;

use Lms\Common\Response;
use Lms\Models\Student;

/**
 * Users controller
 */
class Users
{
    /**
     * Return total amount and records of users (students) from the database
     */
    public static function main()
    {
        if (empty($_COOKIE['user'])) {
            Response::sendResponse(401);
            return;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $page = $_GET['page'] ?? 1;
            $rows_per_page = $_GET['per_page'] ?? 5;
            $students = new Student();
            $result = [
                'count' => $students->countAll(),
                'rows' => $students->search((int) $page, (int) $rows_per_page)
            ];
            Response::sendResponse(200, json_encode($result));
        }
    }
}