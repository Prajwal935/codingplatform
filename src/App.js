import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SelectionPage from "./SelectionPage";
import CodeEditorPage from "./Data/CodeEditorPage";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Apply dark or light mode class globally based on state
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
                <Route path="/" element={<SelectionPage />} />
                <Route 
                    path="/problems/:id" 
                    element={<CodeEditorPage darkMode={darkMode} />} 
                />
            </Routes>
        </>
    );
}
