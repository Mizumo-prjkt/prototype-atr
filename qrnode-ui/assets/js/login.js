document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      const response = await fetch('/api/staff/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      alert(result.message);

      if (response.ok) {
        // In a real app, you would redirect or store a token here
        console.log('Login successful');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('An unexpected error occurred during login.');
    }
  });
});