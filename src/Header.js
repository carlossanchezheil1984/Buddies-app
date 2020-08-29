import React from 'react';
import Button from './Button'

const Header = () => {
    return(
        <header>
            <div className="header-flex-container">
                <div className="logo">bb</div>

                <div className="small-buttons-container">
                <a className="button link" href="/home">Home</a>
                <Button route="#" buttonType="small" text="Login" submitBtn="true" />
                </div>
            </div>

        </header>
    )
}

export default Header;