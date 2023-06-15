import React from 'react';
type Props = {
    label: string
}

export const PC_NavItem: React.FC<Props> = ({label}) => {
    return <div className='text-black hover:text-sky-500'><h1 className="pointer-events-none">{label}</h1></div>;
};
