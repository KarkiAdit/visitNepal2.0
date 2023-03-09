import React from "react";

const Hint = (props) => {
    return (<div className={"container hint-content" + (props.dataPicker ? " active": "")}>
                <p><span>Hint💡</span>{props.currentHint}</p>
            </div>);
}

export default Hint;