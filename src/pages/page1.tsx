import React, { Suspense } from 'react';

const LazyPage1Content = React.lazy(() => import('@/components/Page1Content'));

export const Page1: React.FC = () => {
    return (
        <div>
            <h1>Page1</h1>
            <Suspense fallback={<div>正在載入組件...</div>}>
                <LazyPage1Content />
            </Suspense>
        </div>
    );
};
