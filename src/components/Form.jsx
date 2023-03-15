import React from "react";

const Form = (props) => {
    return  (
        <div className="form-container">
            <form>
                <label htmlFor="user-response">
                    Your Answer 
                </label>
                <input type="text" placeholder="Enter your answer here..." className="form-text" id="user-response" value={props.userInput} onChange={(e) => props.handleInputChange(e)}/>
                <input type="submit" className="form-submit" onClick={(e) => props.handleFormButtonClick(e)} value="Submit" />
            </form>
        </div>    
        )
}

export default Form;