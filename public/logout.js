const logout = async (req, res) => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to logout, please try again.');
    }
};

document.querySelector('#logout').addEventListener('click', logout);

module.exports = logout;

