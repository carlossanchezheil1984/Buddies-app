import React from 'react';
import Button from './Button'

const Header = () => {
    return(
        <header>
            <div className="header-flex-container">
                <div className="logo">bb</div>

                <div className="small-buttons-container">
                <Button buttonType="small" text="Home" submitBtn="true" />
                <Button buttonType="small" text="login" submitBtn="true" />
                </div>
            </div>

        </header>
    )
}

export default Header;