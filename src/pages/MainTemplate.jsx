import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import './MainPage.css';
import React from 'react';

const MainTemplate = () => {

    return (
        <main className="app">
            <Navbar />
            <div className='main-min-height'>
                <Outlet />
            </div>
            <Footer />
        </main>

    );
};

export default MainTemplate;