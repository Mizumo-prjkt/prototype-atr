const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const { sequelize, Staff } = require('./database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // Serve assets folder

// Serve node_modules
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Serve the html files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'login.html'));
// });

// --- API Routes ---

// Staff Signup Endpoint
app.post('/api/staff/signup', async (req, res) => {
  const { email, password, fullName, phoneNumber, address } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Check if user already exists
    const existingStaff = await Staff.findOne({ where: { email } });
    if (existingStaff) {
      return res.status(409).json({ message: 'An account with this email already exists.' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new staff member
    const newStaff = await Staff.create({
      email,
      password: hashedPassword,
      username: email, // Using email as username for now
      staff_type: 'teacher', // Default to 'teacher' to satisfy the CHECK constraint
      full_name: fullName || '',
      phone_number: phoneNumber || '',
      address: address || ''
    });

    res.status(201).json({ message: 'Account created successfully!', staffId: newStaff.staff_id });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'An error occurred during account creation.' });
  }
});

// Staff Login Endpoint
app.post('/api/staff/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Find the staff member by email
    const staff = await Staff.findOne({ where: { email } });
    if (!staff) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, staff.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // For now, we'll just send a success message.
    // In a real application, this is where you would create a session or JWT.
    res.status(200).json({ message: 'Login successful!', staffId: staff.staff_id });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'An error occurred during login.' });
  }
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`qrnode-ui server listening at http://localhost:${port}`);
  });
});