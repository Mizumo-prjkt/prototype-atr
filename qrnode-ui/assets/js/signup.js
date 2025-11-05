document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/api/staff/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Sending only email and password for now
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Success: ${result.message}`);
        signupForm.reset();
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  });
});