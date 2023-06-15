import React from 'react';
import { PC_NavItem } from './PC_NavItem';

type Props = {
    children: React.ReactNode;
    label: string;
};

export const PC_NaviGroupControls: React.FC<Props> = ({ children, label }) => {
    const [open, setOpen] = React.useState(false);
    const toggle = React.useCallback(() => setOpen((s) => !s), []);

    return (
        <>
            <div onClick={toggle} className='inline-flex'>
                {open ? <label>{'ｖ'}</label> : <label>{'＞'}</label>}
                <PC_NavItem label={label} />
            </div>
            {React.Children.map(children, (child, i) => {
                if (!React.isValidElement<{ style: React.CSSProperties }>(child)) return child;
                return React.cloneElement(child, { style: { display: `${open ? 'block' : 'none'}` } });
            })}
        </>
    );
};
