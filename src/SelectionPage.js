import React, { useEffect, useState } from "react";
import RandomProblems from "./Data/RandomProblems";

export default function SelectionPage() {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/problems/")
            .then(response => response.json())
            .then(data => {
                setProblems(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching problems:", error);
                setLoading(false);
            });
    }, []);


    const RandomQuestions = problems.map((problem, index) => (
        <RandomProblems
            key={index}
            difficulty={problem.difficulty}
            name={problem.name}
            id={problem.id}
        />
    ));

    return (
        <div className="SelectionPage">
            <div className="choose-topics">
                <h2>Topics</h2>
                <ul className="choose-topics-part">
                    <li>Basic Programming Concepts</li>
                    <li>Arrays</li>
                    <li>Strings</li>
                    <li>Basic Math</li>
                    <li>Sorting</li>
                    <li>Binary Search</li>
                    <li>Data Structures</li>
                    <li>Greedy</li>
                    <li>Dynamic Programming</li>
                    <li>Graphs</li>
                    <li>Segment Trees</li>
                </ul>
            </div>
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