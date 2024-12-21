import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@monaco-editor/react";

export default function CodeEditorPage() {
    const { id } = useParams();
    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("// Write your code here\n");
    const [language, setLanguage] = useState("javascript");
    const [responseMessage, setResponseMessage] = useState("");
    // Fetch problem data
    useEffect(() => {
        fetch(`http://localhost:8080/problems/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                setProblem(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching problem details:", error);
                setLoading(false);
            });
    }, [id]);


    const handleEditorChange = (value) => {
        setCode(value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        switch (e.target.value) {
            case "cpp":
                setCode("#include <iostream>\nusing namespace std;\nint main() {\n\t//Write your C++ code here\n    return 0;\n}");
                break;
            case "java":
                setCode("public class Main {\n\tpublic static void main(String[] args) {\n        //Write your java code here;\n    }\n}");
                break;
            case "c":
                setCode("#include <stdio.h>\nint main() {\n\t//Write your C code here \n   return 0;\n}");
                break;
            case "javascript":
                setCode("// Write your JavaScript code here\n");
                break;
            case "python":
                setCode("# Write your Python code here\n");
                break;
            default:
                setCode("");
        }
    };

    // Submit handler
    const handleSubmit = () => {
        const codeToSend = JSON.stringify(code);

        const payload = {
            questionId: id,
            language: language,
            code: codeToSend,
        };

        console.log("Sending Payload:", payload);

        fetch("http://localhost:8080/execute/run", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json(); // Backend sends a success message
                } else {
                    throw new Error("Code submission failed. Please check your output.");
                }
            })
            .then((data) => {
                setResponseMessage(`✅ Success: ${data.message}`);
            })
            .catch((error) => {
                setResponseMessage("❌ Error: Your code is incorrect or there was a problem.");
            });
    };

    if (loading) return <p>Loading...</p>;
    if (!problem) return <p>Problem not found!</p>;

    return (
        <div className="editor-container">
            <h1>{problem.message.questionName}</h1>

            {/* Problem Details */}
    <div className="problem-details">
        <h3>Description:</h3>
        <p>{problem.message.description}</p>

        <h3>Input Format:</h3>
        <ul>
            {problem.message.inputFormat.map((input, index) => (
                <li key={index}>{input}</li>
            ))}
        </ul>

        <h3>Output Format:</h3>
        <ul>
            {problem.message.outputFormat.map((output, index) => (
                <li key={index}>{output}</li>
            ))}
        </ul>

        <h3>Constraints:</h3>
        <ul>
            {problem.message.constrains.map((constraint, index) => (
                <li key={index}>{constraint}</li>
            ))}
        </ul>

        <h3>Examples:</h3>
        <ul>
            {problem.message.example.map((example, index) => (
                <li>
                    <div key={index} style={{ marginBottom: "10px", whiteSpace: "pre-line" }}>
                        {example}
                    </div>
                </li>
            ))}
        </ul>

    </div>


            {/* Language Selector */}
            <div className="language-selector">
                <label htmlFor="language">Choose Language: </label>
                <select id="language" value={language} onChange={handleLanguageChange}>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                </select>
            </div>

            {/* Code Editor */}
            <div className="code-editor-container">
                <Editor
                    height="400px"
                    language={language}
                    value={code}
                    onChange={handleEditorChange}
                    theme="vs-dark"
                />
            </div>

            {/* Submit Button */}
            <div className="actions">
                <button className="submit-btn" onClick={handleSubmit}>
                    Submit Code
                </button>
            </div>

            {/* Response Display */}
            <div className="response-container">
                {responseMessage && (
                    <div
                        style={{
                            marginTop: "20px",
                            padding: "10px",
                            backgroundColor: responseMessage.includes("Error") ? "#FFDDDD" : "#D4EDDA",
                            color: responseMessage.includes("Error") ? "#721C24" : "#155724",
                            border: responseMessage.includes("Error")
                                ? "1px solid #F5C6CB"
                                : "1px solid #C3E6CB",
                            borderRadius: "5px",
                        }}
                    >
                        {responseMessage}
                    </div>
                )}
            </div>
        </div>
    );
}