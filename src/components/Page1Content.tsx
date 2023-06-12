import React, { useState } from 'react';

const Page1Content: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading ? 'is Loading...' : ''}
            <img
                src={require('@/public/images/wallpaper.jpg')}
                alt="Image"
                onLoad={handleImageLoad}
                width={800}
                height={600}
                style={isLoading ? { display: 'none' } : {}}
            />
        </div>
    );
};

export default Page1Content;
