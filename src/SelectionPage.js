import React, { useState, useEffect } from "react";
import RandomProblems from "./Data/RandomProblems";

export default function SelectionPage() {
    const [problems, setProblems] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState("random"); 

    const fetchProblems = (topic) => {
        setLoading(true);
        let url =
            topic === "Random Problems" || topic === "random"
                ? "http://localhost:8080/problems" 
                : `http://localhost:8080/problems?sortBy=${topic}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProblems(data.message.results || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching problems:", error);
                setLoading(false);
            });
    };

    // Trigger fetch when the selected topic changes
    useEffect(() => {
        fetchProblems(selectedTopic);
    }, [selectedTopic]);

    // Handle topic click
    const handleTopicClick = (topic) => {
        setSelectedTopic(topic); 
    };

    const RandomQuestions = problems.map((problem, index) => (
        <RandomProblems
            key={index}
            difficulty={problem.difficulty}
            name={problem.questionName}
            id={problem.questionId}
        />
    ));

    return (
        <div className="SelectionPage">
            <div className="choose-topics">
                <h2>Topics</h2>
                <ul className="choose-topics-part">
                    {[
                        "Random Problems",
                        "Arrays",
                        "Strings",
                        "Basic Math",
                        "Sorting",
                        "Binary Search",
                        "Data Structures",
                        "Greedy",
                        "Dynamic Programming",
                        "Graphs",
                        "Segment Trees",
                    ].map((topic) => (
                        <li
                            key={topic}
                            onClick={() => handleTopicClick(topic)}
                            style={{ cursor: "pointer" }} 
                        >
                            {topic}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="random-problems">
                <h2>Problems</h2>
                <section>
                    <div className="selectionPage-problemList-header-title">
                        <div className="selectionPage-problemList-left-section">
                            <h4 >DIFFICULTY</h4>
                        </div>
                        <div className="selectionPage-problemList-middle-section">
                            <h4 >NAME</h4>
                        </div>
                    </div>
                </section>
                <section>
                    {loading ? <p>Loading...</p> : RandomQuestions}
                </section>
            </div>
        </div>
    );
}
