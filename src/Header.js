import React from 'react';
import Button from './Button'

const Header = () => {
    return(
        <header>
            <div className="header-flex-container">
                <div className="logo">bb</div>

                <div className="small-buttons-container">
                <Button buttonType="small" text="Home"/>
                <Button buttonType="small" text="Login"/>
                </div>
            </div>

        </header>
    )
}

export default Header;