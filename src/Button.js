import React from "react";

const Button = props => {
    let classname = "";
    props.buttonType === "small" ? classname="small-button" : classname = "big-button";

    return (
        <button className={classname}>{props.text}</button>
    );
}

export default Button;