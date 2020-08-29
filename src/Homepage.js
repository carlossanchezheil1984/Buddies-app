import React from "react";
import Button from "./Button";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage-container">
                <h1>Welcome to beelbuddy, the social service matching tool</h1> 
                <h2>Select buddy if you are a social service student</h2>

                <div className="homepage-button-container">
                    <Button buttonType="big" text="I am a buddy" />
                    <Button buttonType="big" text="I want a buddy" />
                </div>
            </div>
        </div>
    );
}

export default Homepage;