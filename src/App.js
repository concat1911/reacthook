import React,{useState, useEffect} from 'react';

function App() {

    const [isLightOn, toggleLight] = useState(true);

    const ChangeBG = () => {
        toggleLight(!isLightOn);

        //Previous State
        // toggleLight(prevLight => !prevLight);
    }

    useEffect(() => {
        document.title = `Light is ${isLightOn ? "On" : "Off"}`;
    }, [isLightOn]);

    return (
        <div className="App" style={{background: isLightOn ? "yellow" : "black"}} onClick={ChangeBG}>
            <h1>Turn off the Light</h1>
        </div>
    );
}

export default App;
