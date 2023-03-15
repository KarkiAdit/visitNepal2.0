import React from "react";

const Card = (props) => {
    let cardClassName = "";
    if (props.dataPicker){
        if (props.content.difficulty === "easy"){
            cardClassName = "card-content container bluish-bg";
        } else if (props.content.difficulty === "medium"){
            cardClassName = "card-content container orangish-bg";
        } else{
            cardClassName = "card-content container reddish-bg";
        }
    } else {
        cardClassName = "card-content container whitish-bg";
    }
    return (
            <div className={cardClassName}>
                <div><span>{props.content.difficulty.toUpperCase()}</span> Question. {props.qnNumber + 1}</div>
                <hr />
                {(props.dataPicker ? <p className="buzz-content">{props.content.buzz}</p> : <p className="fact-content">{props.content.fact}</p>)}
            </div>);
}

export default Card;