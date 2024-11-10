import React from "react";
import RandomProblems from "./Data/RandomProblems";
import mockProblems from "./Data/DataRandomProblems";

export default function SelectionPage() {
    const RandomQuestions = mockProblems.map((problem, index) => (
        <RandomProblems
            key={index}
            difficulty={problem.difficulty}
            name={problem.name}
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
                    <div className="selectionPage-problemList-header-top">
                        <div className="selectionPage-problemList-left-section">
                            <h4>DIFFICULTY</h4>
                        </div>
                        <div className="selectionPage-problemList-middle-section">
                            <h4>NAME</h4>
                        </div>
                    </div>
                </section>
                <section>
                    {RandomQuestions}
                </section>
            </div>
        </div>
    );
}