import React from 'react';

const Head = () => {
    return (
        <header className="head">
            <div id="head-bar">
                <div id="logo">RHQ</div>
                    <nav id="link-container">
                        <a>Home</a>
                        <a>About</a>
                    </nav>
            </div>
            <img src='https://www.climbing.com/.image/t_share/MTQ5NjgyMDYxMDgxMzIyOTcy/fullsizerender-31.jpg' alt='climber' id="main-img"/>
        </header>
    )
}

export default Head;