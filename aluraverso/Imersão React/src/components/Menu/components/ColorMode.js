import React, { createContext, useState } from "react";

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => { alert("mode changed") },
    toggleMode: () => { alert("mode changed") }
})



export default function ColorModeProvider(props) {
    const [mode, setMode] = useState(props.initialMode)

    function toggleMode(props) {
        if (mode == "dark") setMode("light")
        if (mode == "light") setMode("dark")
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode:toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}