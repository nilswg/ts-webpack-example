import React, { useEffect, useState } from 'react';
import { NaviGroup } from '../NaviGroup';
import { NaviItem } from '../NaviItem';
import { Mob_MenuPanel } from './Mob_MenuPanel';
import { Mob_NavItem } from './Mob_NaviItem';
import { PC_NavItem } from './PC_NavItem';
import { PC_NaviGroupControls } from './PC_NaviGroupControlst';

type Props_Navigator = {
    children: React.ReactNode;
};

const $pageWidth = () => document.documentElement.clientWidth || document.body.clientWidth;
const $isMobile = () => $pageWidth() < 640;

export const Navigator: React.FC<Props_Navigator> = ({ children }) => {
    const [isMobile, setIsMobile] = useState($isMobile());

    useEffect(() => {
        const resize = () => setIsMobile($isMobile());
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    });

    if (isMobile) {
        const renderChildren = (children: React.ReactNode, prevLabel = '') => {
            return React.Children.map(children, (child) => {
                if (!React.isValidElement(child) || !('type' in child)) return child;

                if (child.type === NaviItem) {
                    const label = child.props.children;
                    return <Mob_NavItem label={prevLabel + label} />;
                } else if (child.type === NaviGroup) {
                    const label = child.props.label;
                    const group = renderChildren(child.props.children, label);
                    return <ul>{group}</ul>;
                } else {
                    console.error('only accepts children of type NaviItem or NaviGroup');
                }

                return child;
            });
        };

        return <Mob_MenuPanel>{renderChildren(children)}</Mob_MenuPanel>;
    } else {
        const renderChildren = (children: React.ReactNode, prevLabel = '') => {
            return React.Children.map(children, (child) => {
                if (!React.isValidElement(child) || !('type' in child)) return child;
                if (child.type === NaviItem) {
                    const label = child.props.children;
                    return prevLabel === '' ? (
                        <div>
                            <PC_NavItem label={label} />
                        </div>
                    ) : (
                        <li>
                            <PC_NavItem label={label} />
                        </li>
                    );
                } else if (child.type === NaviGroup) {
                    const label = child.props.label;
                    const group = renderChildren(child.props.children, label);
                    return prevLabel === '' ? (
                        <div>
                            <PC_NaviGroupControls label={label}>{group}</PC_NaviGroupControls>
                        </div>
                    ) : (
                        <ul>
                            <PC_NaviGroupControls label={label}>{group}</PC_NaviGroupControls>
                        </ul>
                    );
                } else {
                    console.error('only accepts children of type NaviItem or NaviGroup');
                }

                return child;
            });
        };
        return <div className="flex gap-4">{renderChildren(children)}</div>;
    }
};
