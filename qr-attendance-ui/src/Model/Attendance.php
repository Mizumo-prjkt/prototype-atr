<?php

class Attendance {
    private $id;
    private $studentId;
    private $classId;
    private $timestamp;

    public function __construct($studentId, $classId) {
        $this->studentId = $studentId;
        $this->classId = $classId;
        $this->timestamp = date('Y-m-d H:i:s');
    }

    public function getId() {
        return $this->id;
    }

    public function getStudentId() {
        return $this->studentId;
    }

    public function getClassId() {
        return $this->classId;
    }

    public function getTimestamp() {
        return $this->timestamp;
    }

    public function save() {
        // Code to save attendance record to the database
    }

    public static function getAttendanceByStudent($studentId) {
        // Code to retrieve attendance records for a specific student
    }

    public static function getAttendanceByClass($classId) {
        // Code to retrieve attendance records for a specific class
    }
}