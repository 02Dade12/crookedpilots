import React from "react";


function Navbar() {
    return (
        
        <nav className="fixed-top sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Crooked Pilots</a>
                <div className=".justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="/about" href="/">About</a>
                            <a className="nav-link" href="/events">Events</a>
                            <a className="nav-link" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
