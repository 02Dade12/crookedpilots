import React from "react";
import "./css/sidebars.css";

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <span>Admin Portal</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard">
                                    <span data-feather="home"></span> Message Board </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://crookedpilots.sanity.studio/desk">
                                    <span data-feather="file"></span> Sanity Login </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section className="col-md-9 ms-sm-auto col-lg-10 messageboard">
                    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: "25%"}}>
                        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                            <span className="fs-5 fw-semibold">Messages</span>
                        </a>
                        <div className="list-group list-group-flush border-bottom scrollarea">
                            <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">eMail of Sender</strong>
                                    <small>"Date Sent"</small>
                                    <button>x</button>
                                </div>
                                <div className="col-10 mb-1 small">Body Message</div>
                            </a>
                        </div>
                    </div>
                    <div className="b-example-divider"></div>
                    <div className="p-3">
                        <div> Message: </div>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default Dashboard;