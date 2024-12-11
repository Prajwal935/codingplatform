import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SelectionPage from "./SelectionPage";
import CodeEditorPage from "./Data/CodeEditorPage";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<SelectionPage />} />
                <Route path="/problems/:id" element={<CodeEditorPage />} />
            </Routes>
        </>
    );
}
