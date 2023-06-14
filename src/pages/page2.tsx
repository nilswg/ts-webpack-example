import { withDialog } from '@/components/DialogProvider';
import { DialogView } from '@/components/DialogView';
import React from 'react';

const Page2Content: React.FC = withDialog((props) => {
    return (
        <div>
            <h1>Page2</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti quasi alias tenetur sit porro
                delectus quidem? Rerum incidunt, cupiditate voluptatibus, odio, optio ut eveniet voluptatum delectus
                laborum distinctio deserunt.
            </p>
            <button onClick={() => props.dialogAPI.open('Hello, World!!')}>click</button>
            <DialogView />
        </div>
    );
});

export const Page2: React.FC = () => {
    return (
        <div>
            <Page2Content />
        </div>
    );
};
