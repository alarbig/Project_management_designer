const registerFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#confirm-password-signup').value.trim();

    if (password != confirmPassword) {
       document.querySelector('#warning').textContent = "Passwords do not match";
    } else {
        if (name && email && password) {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to login, please try again.');
            }
        }
    }
};

document
    .querySelector('.register-form')
    .addEventListener('submit', registerFormHandler);
