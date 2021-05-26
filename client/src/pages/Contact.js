import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import "./css/contactPage.css";
import API from "../utils/API"

async function getInfo() {
    const name = await document.getElementById('name');
    const email = await document.getElementById('email');
    const number = await document.getElementById('number');
    const message = await document.getElementById('message');
    const modal = document.getElementById('modal');

    function validate() {
        if (!name.value) {
            name.className = "form-control is-invalid"
        }
        if (!email.value) {
            email.className = "form-control is-invalid"
        }
        if (!number.value) {
            number.className = "form-control is-invalid"
        }
        if (!message.value) {
            message.className = "form-control is-invalid"
        }
        if (!name.value || !email.value || !number.value || !message.value) {
            alert('One or more fields not complete.')
        }
        else {
            const info = {
            name: name.value,
            email: email.value,
            number: number.value.toString(),
            message: message.value
            }

            API.NewContact(info);
            
            name.className = "form-control";
            email.className = "form-control";
            number.className = "form-control";
            message.className = "form-control";
            name.value = '';
            email.value = '';
            number.value = '';
            message.value = '';
            modal.innerHTML = '';
            alert('Your message was saved succesfully. You will hear from us shortly. Thank you!');
            location.reload();
        }
    }
    validate();
}

function Contact() {
    return (
        <div id="modal">
            <div className="container contact-form">
                <form>
                    <h1>Reach out to us for bookings and more!</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="name" name="txtName" className="form-control" placeholder="Your Name *" ></input>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="text" id="email" name="txtEmail" className="form-control" placeholder="Your Email *" ></input>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="text" id="number" name="txtPhone" className="form-control" placeholder="Your Phone Number *" ></input>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="submit" onClick={async (event) => { event.preventDefault(); await getInfo() }} name="btnSubmit" data-toggle="modal" data-target="#exampleModal" className="btnContact" value="Send Message" ></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" id="message" className="form-control customTextarea" placeholder="Your Message *" ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body"></div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;