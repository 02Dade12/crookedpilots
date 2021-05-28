import React, { useContext } from "react";
import "./components.css";
import logo from "../pages/pictures/blackLogo.png";
import API from "../utils/API";
import AuthApi from "../utils/AuthApi";

function Navbar() {
    const authApi = React.useContext(AuthApi);
    const handleLogout = async () => {
        const res = await API.logout();
        authApi.setAuth(res.data.auth);
    }
    return (
        <nav className="fixed-top sticky-top navbar navbar-expand-lg navbar-light custom-navbar border-bottom ">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/"><img src={logo} class="rounded-circle logo"></img> Crooked Pilots</a>
                <div className=".justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {!authApi.auth ? <>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link text-light" href="/events">Events</a>
                                <a className="nav-link text-light" href="/contact">Contact</a>
                            </div>
                        </div>
                    </> : (<>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link text-light" href="/events">Events</a>
                                <a className="nav-link text-light" href="/contact">Contact</a>
                                <a className="nav-link text-light" href="/dashboard">Dashboard</a>
                                <a className="nav-link text-light" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</a>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
