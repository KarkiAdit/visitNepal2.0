import React from "react";

const Card = (props) => {
    return (
            <div className="card-content container">
                {(props.dataPicker ? <p className="buzz-content">{props.content.buzz}</p> : <p className="fact-content">{props.content.fact}</p>)}
            </div>);
}

export default Card;