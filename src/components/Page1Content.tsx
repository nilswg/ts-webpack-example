import React, { useState } from 'react';
import BigImage from '@/public/wallpaper.jpg';

export const Page1Content: React.FC = () => {
    return (
        <div>
            <MyWallPaper />
        </div>
    );
};

const MyWallPaper: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <div>Loading...</div>}
            <img
                src={BigImage}
                alt="Image"
                onLoad={handleImageLoad}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
        </>
    );
};
