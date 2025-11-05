# QR-Based Student Attendance Monitoring System

## Overview
This project is a QR-based student attendance monitoring system designed to streamline the process of tracking student attendance using QR codes. The system allows students to scan QR codes to mark their attendance, providing an efficient and accurate way to manage attendance records.

## Project Structure
The project is organized into several directories and files, each serving a specific purpose:

- **public/**: Contains the publicly accessible files, including the entry point and user interface.
  - **index.php**: Entry point for the application.
  - **home.php**: Home page of the attendance monitoring system.
  - **scan.php**: QR code scanning interface.
  - **assets/**: Contains CSS and JavaScript files for styling and functionality.
  
- **src/**: Contains the core application logic.
  - **Controller/**: Contains controllers that handle requests and responses.
    - **HomeController.php**: Manages the home page logic.
    - **ScanController.php**: Manages the QR code scanning logic.
  - **Model/**: Contains data models.
    - **Attendance.php**: Represents attendance data and interactions.
  - **View/**: Contains view templates.
    - **templates/**: Contains layout and specific view files.
  
- **config/**: Contains configuration files.
  - **config.php**: Application configuration settings.
  
- **routes/**: Contains route definitions.
  - **web.php**: Maps URLs to controllers and actions.
  
- **tests/**: Contains test files.
  - **Feature/**: Contains feature tests for the application.
    - **ScanTest.php**: Tests for the scanning functionality.
  
- **composer.json**: Composer configuration file for dependencies.
- **.env.example**: Template for environment variables.
- **README.md**: Documentation for the project.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using Composer:
   ```
   composer install
   ```
4. Configure your environment variables by copying `.env.example` to `.env` and updating the values as needed.
5. Set up your database and update the configuration in `config/config.php`.
6. Start the web server and access the application via `http://localhost/qr-attendance-ui/public/index.php`.

## Usage
- Navigate to the home page to access different functionalities.
- Use the QR code scanning interface to mark attendance by scanning the provided QR codes.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.