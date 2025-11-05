<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Attendance Scan</title>
    <link rel="stylesheet" href="assets/css/app.css">
</head>
<body>
    <div class="container">
        <h1>Scan QR Code for Attendance</h1>
        <div id="scanner" class="scanner">
            <!-- QR Code scanner will be initialized here -->
        </div>
        <button id="start-scan" class="btn">Start Scanning</button>
        <div id="result" class="result">
            <!-- Scanned result will be displayed here -->
        </div>
    </div>
    <script src="assets/js/app.js"></script>
</body>
</html>