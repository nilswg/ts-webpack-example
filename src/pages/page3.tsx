import { NaviGroup } from '@/components/NaviGroup';
import { NaviItem } from '@/components/NaviItem';
import { Navigator } from '@/components/Navigator';
import React from 'react';

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
