<?php
// Configuration settings for the QR-based student attendance monitoring system

return [
    'database' => [
        'host' => 'localhost',
        'name' => 'attendance_db',
        'user' => 'root',
        'password' => '',
    ],
    'app' => [
        'url' => 'http://localhost/qr-attendance-ui/public',
        'debug' => true,
    ],
    'qr' => [
        'enabled' => true,
        'scan_timeout' => 30, // seconds
    ],
];