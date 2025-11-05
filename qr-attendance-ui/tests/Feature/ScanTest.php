<?php

use PHPUnit\Framework\TestCase;

class ScanTest extends TestCase
{
    public function testScanPageLoadsSuccessfully()
    {
        $response = $this->get('/scan');
        $response->assertStatus(200);
        $response->assertSee('QR Code Scanner');
    }

    public function testValidQRCodeSubmission()
    {
        $response = $this->post('/scan', ['qr_code' => 'VALID_QR_CODE']);
        $response->assertStatus(200);
        $response->assertSee('Attendance recorded successfully');
    }

    public function testInvalidQRCodeSubmission()
    {
        $response = $this->post('/scan', ['qr_code' => 'INVALID_QR_CODE']);
        $response->assertStatus(400);
        $response->assertSee('Invalid QR Code');
    }
}