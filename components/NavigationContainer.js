import React, { useState } from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import NavTabs from './NavTabs';

const NavigationContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Signup') {
            return <Signup />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default NavigationContainer;