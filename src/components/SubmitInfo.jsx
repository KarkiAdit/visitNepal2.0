import React from "react";

const SubmitInfo = (props) => {
    return (
            <div className={props.showSubmitInfo ? "overlay active": "overlay"}>
                {(props.currentData.correctedAns? "Hurray, Correct Answer!!": "Sorry, wrong answer!!")}
                <div className="button">
                    {(props.currentData.correctedAns ? <button onClick={() => props.updateMasteredInfo()}>🏆Mastered</button>: "")}
                    <button onClick={() => props.setShowSubmitInfo(false)}>❌ Close</button> 
                </div>
            </div>)
}

export default SubmitInfo;