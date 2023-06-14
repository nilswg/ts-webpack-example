import React from 'react';
import ReactDOM from 'react-dom';
import { withDialog } from './DialogProvider';

export const DialogView = withDialog((props) => {
    const { isOpen, message, dialogAPI } = props;

    const display = isOpen ? 'block' : 'none';

    return ReactDOM.createPortal(
        <div className="dialog_view" style={{ display }}>
            <div className="dialog_box">
                <div className="dialog_content">
                    {/* 顯示的內容 */}
                    <h1>{message}</h1>
                    <button onClick={() => dialogAPI.close()}>close</button>
                </div>
            </div>
        </div>,
        document.getElementById('dialog')!,
    );
});
