import React, {useRef, useState} from 'react';
import "./ClickTracker.css";

const ClickTracker = () => {

    const [message, setMessage] = useState("Click the button!");
    const totalClicks = useRef(0);

    const handleSecretClick = () => {
        totalClicks.current += 1;

        if (totalClicks.current == 5) {
            setMessage("Wow, 5 clicks! You're fast.");
        }
    };

    return (
        <main className="main">
            <h1>Silent Counter</h1>
            <h3>{message}</h3>
            <button onClick={handleSecretClick}>Click</button>
        </main>
    );
}

export default ClickTracker;