import React from 'react';

type Props_NaviItem = {
    children: React.ReactNode;
    onClick: () => void;
};

export const NaviItem: React.FC<Props_NaviItem> = ({ onClick, children }) => {
    return <div>NaviItem</div>;
};
