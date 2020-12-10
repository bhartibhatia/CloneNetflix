import React, { useState , useEffect } from 'react'
import "./Nav.css"
function Nav() {
    const [show,handelShow]=useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY >100)
            {
                handelShow(true);
            }else handelShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }
        },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
<img className="nav_logo"
src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
 alt="Netflix-Logo"
 />
 <img
 className="nav_avatar"
 src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
  alt="Netflix-Logo"
 />
            
        </div>
    )
}

export default Nav
