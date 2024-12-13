import React from "react";
import { Link } from "react-router-dom";

export default function RandomProblems(props) {
    return (
        <div className="selectionPage-problemList">
            <div className="selectionPage-problemList-left-section">
                {props.difficulty}
            </div>

            <div className="selectionPage-problemList-middle-section">
                <Link to={`/problems/${props.id}`} className="problem-link">
                    {props.name}
                </Link>
            </div>

            <div className="selectionPage-problemList-right-section">
                <Link to={`/problems/${props.id}`}>
                    <img
                        className="selectionPage-problemList-symbol"
                        src="./images/arrow-symbol.png"
                        alt="Arrow"
                    />
                </Link>
            </div>
        </div>
    );
}
