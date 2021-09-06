<?php
namespace Lms\Models;

use Lms\Common\Entity;
use PDO;

/**
 * Student entity
 */
class Student extends Entity
{
    /**
     * Count all rows in students table
     * @return mixed
     */
    public function countAll()
    {
        return $this->connection->query('SELECT COUNT(*) FROM students')->fetchColumn();
    }

    /**
     * Return students records with a given offset
     * @param int $page
     * @param int $rows_per_page
     * @return array|false
     */
    public function search(int $page, int $rows_per_page)
    {
        $offset = ($page - 1) * $rows_per_page;
        $query = $this->connection->prepare('SELECT * FROM students LIMIT ?,?');
        $query->bindParam(1, $offset, PDO::PARAM_INT);
        $query->bindParam(2, $rows_per_page, PDO::PARAM_INT);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
}