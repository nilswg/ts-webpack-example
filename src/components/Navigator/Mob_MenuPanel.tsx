import React, { useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export const Mob_MenuPanel: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex max-w-[6rem] justify-center border-[1px] bg-black p-3 text-white hover:text-sky-400"
                onClick={() => setIsOpen((s) => !s)}>
                <h1 className="pointer-events-none">Menu</h1>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>{children}</div>
        </div>
    );
};
