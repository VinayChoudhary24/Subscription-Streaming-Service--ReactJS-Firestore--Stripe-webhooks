import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    // This Function will SHOW and HIDE the NAV BAR COLOR
    const [show, handleShow] = useState(true);

    // This is the Function
    const transitionNavBar = () => {
        // This will Make Sure that when the USER SCROLL DOWN-- on the Y-axis by 100 it will Hide the NavBar COLOR
        if(window.scrollY > 100) {
            handleShow(false);
        } else {
            handleShow(true);
        }
    };
    useEffect( () => {
        window.addEventListener("scroll", transitionNavBar);
        // The Clean-up function
        return ( () => window.removeEventListener("scroll", transitionNavBar))
    }, [])

  return (
    // add a className
    // Add additional className(nav__color) to Get the color Effect on the Top of the NAV
    // Use STRING INTERPOLATION to Bind the show Variable to the  Color i.e Only show the Yellow class when the show variable is true
    <div className={`nav ${show && "nav__yellow"}`}>
      {/* Add the Image Tag and Create a div that contains All the Platform Images */}
      <div className="nav__contents">
      <img
        className="nav__amazon"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_Prime_Logo.svg" height="50px" width="50px"
        alt="amazonLogo" />

      <img
        className="nav__netflix"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" height="50px" width="50px"
        alt="netflixLogo" />

      <img 
        className='nav__hulu'
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" height="50px" width="50px"
        alt="huluLogo" />

      <img 
        className='nav__hbo'
        src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" height="50px" width="50px"
        alt="hboLogo" />

      <img 
        className='nav__disney'
        src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" height="50px" width="50px" 
        alt="disneyLogo" />

      <img 
        className='nav__apple'
        src="https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg" height="50px" width="50px"
        alt="appleLogo" />

      {/* This is for the USER AVATAR, Add a HeroIcon Later*/}
      <img 
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/e/ed/AppleTV.svg"
        alt="userAvatar" />

      </div>
        
    </div>
  );
}

export default Nav;
