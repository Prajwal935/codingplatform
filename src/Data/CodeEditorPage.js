import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@monaco-editor/react"; // Corrected import statement

export default function CodeEditorPage() {
    const { id } = useParams(); // Get the problem ID from the URL
    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("// Write your code here\n");

    useEffect(() => {
        // Replace this URL with your actual API endpoint
        fetch(`http://localhost:8080/problems/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProblem(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching problem details:", error);
                setLoading(false);
            });
    }, [id]);

    // Handle code change in the editor
    const handleEditorChange = (value) => {
        setCode(value);
    };

    if (loading) return <p>Loading...</p>;
    if (!problem) return <p>Problem not found!</p>;

    return (
        <div className="editor-container">
            <h1>{problem.title}</h1>
            <div className="problem-details">
                <h3>Description:</h3>
                <p>{problem.description}</p>
                <h3>Constraints:</h3>
                <p>{problem.constraints}</p>
                <h3>Example:</h3>
                <pre>{problem.example}</pre>
            </div>

            <div className="code-editor-container">
                <h3>Your Code</h3>
                <Editor
                    height="400px"
                    language="javascript"
                    value={code}
                    onChange={handleEditorChange}
                    theme="vs-dark"
                />
            </div>

            <div className="actions">
                <button className="submit-btn">Submit Code</button>
            </div>
        </div>
    );
}
