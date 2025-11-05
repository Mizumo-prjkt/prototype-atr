<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Attendance Scan</title>
    <link rel="stylesheet" href="/assets/css/app.css">
</head>
<body>
    <div class="container">
        <h1>Scan QR Code for Attendance</h1>
        <div id="qr-reader" style="width: 100%;"></div>
        <div id="qr-reader-results"></div>
    </div>

    <script src="/assets/js/app.js"></script>
    <script>
        // Initialize QR code reader
        const qrReader = new Html5Qrcode("qr-reader");
        qrReader.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: 250
            },
            (decodedText, decodedResult) => {
                document.getElementById("qr-reader-results").innerText = decodedText;
                // Here you can add code to handle the scanned QR code, such as sending it to the server
            },
            (errorMessage) => {
                // Handle scanning errors
            }
        ).catch(err => {
            console.error(err);
        });
    </script>
</body>
</html>