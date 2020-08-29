import React from "react";
import Header from "./Header";


const Homepage = () => {
    return (
        <div class="homepage">
            <Header />
            <div class="homepage-container">
                <h1>Welcome to beelbuddy, the social service matching tool</h1> 
                <h2>Select buddy if you are a social service student</h2>

                <div class="homepage-button-container">
                
                <a href="/BuddiesForm" className="button big-button">I am a buddy</a>
                <a href="/StudentForm" className="button big-button">I want a buddy</a>
                
                </div>
            </div>
        </div>
    );
}

export default Homepage;