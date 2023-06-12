import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages';
import { Page1 } from './pages/page1';

export const App: React.FC = () => {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
            </Routes>
        </>
    );
};
