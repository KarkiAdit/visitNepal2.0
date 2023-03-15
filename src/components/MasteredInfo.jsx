import React from "react";

const MasteredInfo = (props) => {
    return (
            <div className={props.showMasteredInfo ? "overlay active": "overlay"}>
                <div className="mastered-info">
                    <h1>Mastered Data</h1>
                    {props.data.map((question) => {
                        if (question.mastered){
                            return (<p>
                                        <span className="buzz-content">{question.buzz}</span>
                                        <span className="fact fact-content">{question.fact}</span>
                                    </p>)
                        }
                    })}
                    <button onClick={() => props.setShowMasteredInfo(false)}>❌ Close</button> 
                </div>
            </div>)
}

export default MasteredInfo;