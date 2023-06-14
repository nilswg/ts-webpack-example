import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { DialogProvider } from './components/DialogProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <DialogProvider>
            <App />
        </DialogProvider>
    </React.StrictMode>,
);
