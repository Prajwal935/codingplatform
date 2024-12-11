import React, { useState, useEffect } from "react";
import RandomProblems from "./Data/RandomProblems";

export default function SelectionPage() {
    const [problems, setProblems] = useState([]); // Stores fetched problems
    const [loading, setLoading] = useState(false); // Loading state
    const [selectedTopic, setSelectedTopic] = useState("random"); // Default: Random Problems

    // Function to fetch problems based on the selected topic
    const fetchProblems = (topic) => {
        setLoading(true);
        let url =
            topic === "Random Problems" || topic === "random"
                ? "http://localhost:8080/problems" // For random problems
                : `http://localhost:8080/problems?sortBy=${topic.toLowerCase()}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Data:", data);
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
        setSelectedTopic(topic); // Update the selected topic
    };

    // Render the list of problems
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
            {/* Topics Section */}
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
                            style={{ cursor: "pointer" }} // Add pointer cursor
                        >
                            {topic}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Problems Section */}
            <div className="random-problems">
                <h2>Problems</h2>
                <section>
                    <div className="selectionPage-problemList-header-title">
                        <div className="selectionPage-problemList-left-section">
                            <h4>DIFFICULTY</h4>
                        </div>
                        <div className="selectionPage-problemList-middle-section">
                            <h4>NAME</h4>
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
