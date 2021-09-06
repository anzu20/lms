<?php

namespace Lms\Models;

use Lms\Common\Entity;

class User extends Entity
{
    /**
     * @var string login
     */
    public $login;

    /**
     * @var string password
     */
    public $password;

    /**
     * @var bool remember user
     */
    public $remember;

    public function login(): bool
    {
        if ($this->login && $this->password && $this->validate()) {
            setcookie('user', base64_encode($this->login), $this->remember ? (time() + 86400 * 30) : 0, '/', '', false, true);
            return true;
        }
        return false;
    }

    public function validate(): bool
    {
        $query = $this->connection->prepare('SELECT * FROM api_users WHERE login=:login');
        $query->execute([
            'login' => $this->login
        ]);
        $user = $query->fetchAll();
        return $user[0] && password_verify($this->password, $user[0]['password']);
    }
}