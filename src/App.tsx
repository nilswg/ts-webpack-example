import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import { Page3 } from './pages/page3';

export const App: React.FC = () => {
    const routes = [
        { url: '/', name: 'Home', Element: Home },
        { url: '/page1', name: 'Page1', Element: Page1 },
        { url: '/page2', name: 'Page2', Element: Page2 },
        { url: '/page3', name: 'Page3', Element: Page3 },
    ];

    return (
        <BrowserRouter>
            <nav className="bg-black">
                <ul className="mt-1 flex pr-1">
                    {routes.map(({ url, name }) => (
                        <li key={url} className="p-3 text-white hover:bg-slate-100 hover:text-black">
                            <Link to={url}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                {routes.map(({ url, Element }) => (
                    <Route key={url} path={url} element={<Element />} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};
