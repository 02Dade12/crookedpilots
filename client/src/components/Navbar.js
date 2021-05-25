import React from "react";
import "./components.css";
import logo from "../pages/pictures/blackLogo.png";

function Navbar() {
    return (
        <nav className="fixed-top sticky-top navbar navbar-expand-lg navbar-light custom-navbar border-bottom ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo} class="rounded-circle logo"></img> Crooked Pilots</a>
                <div className=".justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link text-dark" href="/events">Events</a>
                            <a className="nav-link text-dark" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
