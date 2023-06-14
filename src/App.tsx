import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import './index.css';

export const App: React.FC = () => {
    const routes = [
        { url: '/', name: 'Home', Element: Home },
        { url: '/page1', name: 'Page1', Element: Page1 },
        { url: '/page2', name: 'Page2', Element: Page2 },
    ];

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    {routes.map(({ url, name }) => (
                        <li>
                            <Link to={url}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                {routes.map(({ url, Element }) => (
                    <Route path={url} element={<Element />} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};
