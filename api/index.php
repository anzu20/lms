<?php
require __DIR__ . '/autoload.php';

use Lms\Common\Response;

header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Origin: ' . getenv('LMS_FRONT_URL'));
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');

// Parse url and get controller name
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = explode('/', substr($url, strpos($url,'api/') + 4));
if (isset($path[0]) && class_exists('Lms\\Controllers\\' . ucfirst($path[0]))) {
    // Call controller main method
    $name = 'Lms\\Controllers\\' . $path[0];
    try {
        $name::main();
    } catch (Exception $e) {
        Response::sendResponse(500, $e->getMessage());
    }
} else {
    // Send 404 if controller not found
    Response::sendResponse(404, "");
}
return;