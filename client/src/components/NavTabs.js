import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    <ul className='Navigation'>
        <li className='nav-item'>
            <a
                href='home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
                Home
            </a>
        </li>
        <li className='nav-item'>
            <a
                href='signup'
                onClick={() => handlePageChange('Signup')}
                className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
            >
                Signup
            </a>
        </li>
        <li className='nav-item'>
            <a
                href='login'
                onClick={() => handlePageChange('Login')}
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
            >
                Login
            </a>
        </li>
    </ul>
}

export default NavTabs;