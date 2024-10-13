import React, { useEffect, useState } from 'react';
import Page from "./wheels/page";

export default function Home() {
    const [vh, setVh] = useState(window.innerHeight); // Initialize state with current viewport height

    useEffect(() => {
        const handleResize = () => {
            const newVh = window.innerHeight;
            setVh(newVh); // Update the state with the new viewport height
            console.log(newVh); // This will print the updated viewport height in pixels
        };

        // Add the resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {/* You can use the vh state here */}
            <h1>Viewport Height: {vh}px</h1>
            {/* Render the Page component */}
            <Page />
        </div>
    );
}
