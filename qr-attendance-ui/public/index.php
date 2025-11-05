<?php
// Entry point for the QR-based student attendance monitoring system

require_once '../vendor/autoload.php'; // Load Composer dependencies

use App\Controller\HomeController;
use App\Controller\ScanController;

// Start the session
session_start();

// Define the routing logic
$requestUri = $_SERVER['REQUEST_URI'];

if ($requestUri === '/') {
    $controller = new HomeController();
    $controller->index();
} elseif ($requestUri === '/scan') {
    $controller = new ScanController();
    $controller->scan();
} else {
    http_response_code(404);
    echo "404 Not Found";
}
?>