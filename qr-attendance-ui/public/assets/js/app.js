// This file contains JavaScript code for client-side functionality, including handling QR code scanning and user interactions.

document.addEventListener('DOMContentLoaded', function() {
    const scanButton = document.getElementById('scan-button');
    const qrCodeInput = document.getElementById('qr-code-input');
    const attendanceStatus = document.getElementById('attendance-status');

    scanButton.addEventListener('click', function() {
        const qrCode = qrCodeInput.value.trim();
        if (qrCode) {
            markAttendance(qrCode);
        } else {
            alert('Please scan a QR code.');
        }
    });

    function markAttendance(qrCode) {
        fetch('/api/attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ qrCode: qrCode }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                attendanceStatus.textContent = 'Attendance marked successfully!';
                qrCodeInput.value = '';
            } else {
                attendanceStatus.textContent = 'Failed to mark attendance. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            attendanceStatus.textContent = 'An error occurred. Please try again.';
        });
    }
});