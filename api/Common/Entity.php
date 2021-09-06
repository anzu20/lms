<?php

namespace Lms\Common;

use Exception;
use PDO;
use PDOException;

/**
 * Represents a database connection
 */
class Entity
{
    /**
     * @var PDO db connection
     */
    public $connection;

    /**
     * @throws Exception
     */
    public function __construct()
    {
        // Open db connection
        try {
            $this->connection = new PDO(
                getenv('LMS_DB_DSN'),
                getenv('LMS_DB_USER'),
                getenv('LMS_DB_PASSWORD')
            );
        } catch (PDOException $e) {
            throw new Exception('Database connection failed');
        }
    }
}