import React from 'react';
import {  Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <div className="nav-grid">
                <Link to="/"><h1>DEMO Streaming</h1></Link>
                <nav>
                    <ul>
                        <li>Log in</li>
                        <li className="cta"><a className="button grey">Start your free trial</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;