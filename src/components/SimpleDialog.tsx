import React from 'react';
import ReactDOM from 'react-dom';

export const SimpleDialog = () => {
    return ReactDOM.createPortal(
        <div id="dialog">
            <div className="dialog-content">
                <h2>Dialog Content</h2>
                <p>This is the content of the dialog.</p>
            </div>
        </div>,
        document.getElementById('dialog')!,
    );
};
