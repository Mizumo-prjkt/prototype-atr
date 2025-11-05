<?php

namespace App\Controller;

use App\Model\Attendance;

class ScanController
{
    private $attendanceModel;

    public function __construct()
    {
        $this->attendanceModel = new Attendance();
    }

    public function showScanPage()
    {
        // Render the scan view
        include '../src/View/templates/scan.php';
    }

    public function processScan($qrData)
    {
        // Process the scanned QR code data
        $studentId = $this->extractStudentId($qrData);
        if ($this->attendanceModel->markAttendance($studentId)) {
            return ['status' => 'success', 'message' => 'Attendance marked successfully.'];
        } else {
            return ['status' => 'error', 'message' => 'Failed to mark attendance.'];
        }
    }

    private function extractStudentId($qrData)
    {
        // Extract student ID from QR code data
        // Assuming QR data is in the format "studentId:12345"
        list($key, $studentId) = explode(':', $qrData);
        return $studentId;
    }
}