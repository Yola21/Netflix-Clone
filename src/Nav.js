import React, { useEffect, useState } from 'react';
import './Nav.css';  

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100)
                handleShow(true);
            else 
                handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" 
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt=""
            />
            
        </div>
    )
}

export default Nav
