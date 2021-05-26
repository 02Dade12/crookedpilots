import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./css/sidebars.css";

function Dashboard() {

    const [messages, setMessages] = useState([])
    const [chosen, setChosen] = useState([])

    useEffect(() => {
        loadmessages()
    }, [])

    async function loadmessages() {
        await API.getMessages()
            .then(res =>
                setMessages(res.data)
            )
            .catch(err => console.log(err));

    };

    function choseOne(id) {
        API.getMessage(id)
            .then(res =>
                setChosen(res.data)
            )
            .catch(err => console.log(err))
    };

    function deleteOne(id) {
        API.deleteMessage(id);
        location.reload();
    }



    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block bg-light" style={{ float: 'left', width: 200 }}>
                    <div className="pt-3">
                        <span>Admin Portal</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard">
                                    <span data-feather="home"></span> Message Board </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://crookedpilots.sanity.studio/" target="_blank">
                                    <span data-feather="file"></span> Sanity Login </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="col-md-3 col-lg-3 messageboard" style={{ marginBottom: '10%' }}>

                    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                        <a href="/dashboard" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                            <span className="fs-5 fw-semibold">Messages</span>
                        </a>
                        {messages.map(message => (
                            <div key={message.id} className="list-group list-group-flush border-bottom ">
                                <a className="list-group-item list-group-item-action active " aria-current="true" style={{ marginBottom: 10 }}>
                                    <div>
                                        <h5 className="mb-1">Sender's Name: {message.name}</h5>
                                        <p>sent: {moment(message.date).format('LL')}</p>
                                        <p>{message.message}</p>
                                        <label type="button" class="btn btn-outline-dark" style={{ marginRight: '2%', outline: 'none' }} onClick={async () => { await choseOne(message.id); console.log(chosen) }}>More</label>
                                        <label type="button" class="btn btn-outline-dark" onClick={() => deleteOne(message.id)}>Delete</label>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                </section>
                <div className="b-example-divider col-md-1"></div>
                <div className="col-md-5">
                    <div> Message: </div>
                    {chosen.length < 1 ? (
                        ''
                    ) : (
                            <div class="card" style={{width: '18rem'}}>
                                <div class="card-body">
                                    <h5 class="card-title">{chosen.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{moment(chosen.date).format('LL')}</h6>
                                    <p class="card-text">Phone Number: {chosen.number}</p>
                                    <p>"{chosen.message}"</p>
                                    <div class="row">
                                    <a class="col-md-2" target="blank_" rel="noreferrer" className="mailto" href={"mailto:" + chosen.email} class="card-link">{chosen.email}</a>
                                    <a class="col-md-8" href="#" class="card-link" onClick={() => deleteOne(chosen.id)}>Delete Message</a>
                                    </div>
                                </div>
                            </div>
                        )}

                </div>



            </div>
        </div>
    )
}

export default Dashboard;