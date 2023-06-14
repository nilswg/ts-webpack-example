import { NaviGroup } from '@/components/NaviGroup';
import { NaviItem } from '@/components/NaviItem';
import React, { useEffect } from 'react';

const isMobile: boolean = false;

export const Page3: React.FC = () => {
    return (
        <Navigator>
            <NaviItem onClick={() => {}}>最新消息</NaviItem>
            <NaviGroup label="我們的產品">
                <NaviGroup label="一般版">
                    <NaviItem onClick={() => {}}>特性</NaviItem>
                    <NaviItem onClick={() => {}}>模組</NaviItem>
                    <NaviItem onClick={() => {}}>購買</NaviItem>
                </NaviGroup>
                <NaviGroup label="專業版">
                    <NaviItem onClick={() => {}}>特性</NaviItem>
                    <NaviItem onClick={() => {}}>模組</NaviItem>
                    <NaviItem onClick={() => {}}>購買</NaviItem>
                </NaviGroup>
                <NaviItem onClick={() => {}}>功能比較</NaviItem>
            </NaviGroup>
            <NaviGroup label="功能學習">
                <NaviItem onClick={() => {}}>教學文件</NaviItem>
                <NaviItem onClick={() => {}}>教學影片</NaviItem>
                <NaviItem onClick={() => {}}>範例下載</NaviItem>
            </NaviGroup>
            <NaviGroup label="客戶服務">
                <NaviItem onClick={() => {}}>常見問題</NaviItem>
                <NaviItem onClick={() => {}}>線上諮詢</NaviItem>
                <NaviItem onClick={() => {}}>服務據點</NaviItem>
            </NaviGroup>
        </Navigator>
    );
};

type Props_Navigator = {
    children: React.ReactNode;
};

const Navigator: React.FC<Props_Navigator> = ({ children }) => {
    if (isMobile) {
        const renderChildren = (children: React.ReactNode, prevLabel = '') => {
            return React.Children.map(children, (child) => {
                if (!React.isValidElement(child) || !('type' in child)) return child;

                if (child.type === NaviItem) {
                    /**
                     * 只取前一個來產生選單元素
                     */
                    if (prevLabel !== '') {
                        return <li>{prevLabel + child.props.children}</li>;
                    } else {
                        return <ul>{child.props.children}</ul>;
                    }
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

        return <div>{renderChildren(children)}</div>;
    } else {
        const renderChildren = (children: React.ReactNode, prevLabel = '') => {
            return React.Children.map(children, (child) => {
                if (!React.isValidElement(child) || !('type' in child)) return child;

                if (child.type === NaviItem) {
                    if (prevLabel === '') {
                        return (
                            <MyNavGroup className="">
                                <h1 className="rounded-md border-[1px] border-slate-800 p-2">{child.props.children}</h1>
                            </MyNavGroup>
                        );
                    } else {
                        return <li>{child.props.children}</li>;
                    }
                } else if (child.type === NaviGroup) {
                    const label = child.props.label;
                    const group = renderChildren(child.props.children, label);
                    if (prevLabel === '') {
                        return (
                            <MyNavGroup className="">
                                <h1 className="pointer-events-none rounded-md border-[1px] border-slate-800 p-2">
                                    {label}
                                </h1>
                                <ul className={'mt-1 border-[1px] pl-3'}>{group}</ul>
                            </MyNavGroup>
                        );
                    } else {
                        return (
                            <>
                                <h1>{label}</h1>
                                <ul className={'mt-1 border-[1px] pl-3'}>{group}</ul>
                            </>
                        );
                    }
                } else {
                    console.error('only accepts children of type NaviItem or NaviGroup');
                }

                return child;
            });
        };
        return <div className="flex gap-4">{renderChildren(children)}</div>;
    }
};

const MyNavGroup = ({ className, children }) => {
    const [open, setOpen] = React.useState(true);
    const ref = React.useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const toggle = () => setOpen((s) => !s);
        ref.current?.addEventListener('click', toggle);
        return () => {
            ref.current?.removeEventListener('click', toggle);
        };
    });

    return (
        <ul ref={ref} className={className} aria-state={`${open ? 'open' : 'hidden'}`}>
            {React.Children.map(children, (child, i) => {
                if (child.type !== 'h1') {
                    return React.cloneElement(child, { style: { display: `${open ? 'block' : 'none'}` } });
                }
                return child;
            })}
        </ul>
    );
};
