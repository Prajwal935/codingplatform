import React from "react";

export default function RandomProblems(props) {
    return (
        <div className="selectionPage-problemList">
            <div className="selectionPage-problemList-left-section">
                {props.difficulty}
            </div>
            <div className="selectionPage-problemList-middle-section">
                <a
                    href={`/problems/${props.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="problem-link"
                >
                    {props.name}
                </a>
            </div>
            <div className="selectionPage-problemList-right-section">
                <a
                    href={`/problems/${props.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="selectionPage-problemList-symbol" src="/images/arrow-symbol.png" alt="Arrow" />
                </a>
            </div>
        </div>
    );
}
