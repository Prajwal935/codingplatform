import React from "react"

export default function RandomProblems(props){
    return (
        <div className="selectionPage-problemList-header">
            <div className="selectionPage-problemList-left-section">
                {props.difficulty} 
            </div>
            <div className="selectionPage-problemList-middle-section">
                {props.name}
            </div>
            <div className="selectionPage-problemList-right-section">
                <img className="selectionPage-problemList-symbol" src="./images/arrow-symbol.png"/>
            </div>
        </div>
    )
}