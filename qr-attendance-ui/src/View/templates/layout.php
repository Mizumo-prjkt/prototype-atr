<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Attendance System</title>
    <link rel="stylesheet" href="/assets/css/app.css">
</head>
<body>
    <header>
        <h1>QR Attendance Monitoring System</h1>
        <nav>
            <ul>
                <li><a href="/home.php">Home</a></li>
                <li><a href="/scan.php">Scan Attendance</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <?php echo $content; ?>
    </main>
    <footer>
        <p>&copy; <?php echo date("Y"); ?> QR Attendance System. All rights reserved.</p>
    </footer>
    <script src="/assets/js/app.js"></script>
</body>
</html>