import React from "react";
import "./css/sidebars.css";

function Dashboard() {
    return (
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <span>Admin Portal</span>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/dashboard">
                                    <span data-feather="home"></span> Message Board </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://crookedpilots.sanity.studio/desk">
                                    <span data-feather="file"></span> Sanity Login </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section class="col-md-9 ms-sm-auto col-lg-10 messageboard">
                    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: "25%"}}>
                        <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                            <span class="fs-5 fw-semibold">Messages</span>
                        </a>
                        <div class="list-group list-group-flush border-bottom scrollarea">
                            <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <strong class="mb-1">eMail of Sender</strong>
                                    <small>"Date Sent"</small>
                                    <button>x</button>
                                </div>
                                <div class="col-10 mb-1 small">Body Message</div>
                            </a>
                        </div>
                    </div>
                    <div class="b-example-divider"></div>
                    <div class="p-3">
                        <div> Message: </div>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default Dashboard;