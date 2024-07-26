import { useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState("Sanjay S");
    const [background, setBackground] = useState("#054D00");
    const [color, setColor] = useState("#ffffff");
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(250);

    const searchParams = new URLSearchParams({
        text: name,
    });

    return (
        <div>
            <img alt={name} src={`https://dummyimage.com/${width}x${height}/${background.replace("#", "")}/${color.replace("#", "")}.png&${searchParams.toString()}`} />
            <form style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='background'>Background</label>
                    <input id='background' type='color' value={background} onChange={e => setBackground(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='color'>Color</label>
                    <input id='color' type='color' value={color} onChange={e => setColor(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='width'>Width</label>
                    <input id='width' min={100} max={500} type='range' value={width} onChange={e => setWidth(e.target.valueAsNumber)} />
                </div>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input id='height' min={100} max={500} type='range' value={height} onChange={e => setHeight(e.target.valueAsNumber)} />
                </div>
            </form>
        </div>
    )
}

export default App
