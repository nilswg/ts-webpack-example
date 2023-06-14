import React from 'react';

type Props_NaviGroup = {
    label: string;
    children: React.ReactNode;
};

export const NaviGroup: React.FC<Props_NaviGroup> = ({ label, children }) => {
    return <h1>NaviGroup {label}</h1>;
};
