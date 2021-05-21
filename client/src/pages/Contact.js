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
        }
    }
    await validate();
}

function Contact() {
    return (
        <div id="modal">
            <div class="container contact-form">
                <form>
                    <h3>Reach out to us for bookings and more!</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" id="name" name="txtName" class="form-control" placeholder="Your Name *" ></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <input type="text" id="email" name="txtEmail" class="form-control" placeholder="Your Email *" ></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <input type="text" id="number" name="txtPhone" class="form-control" placeholder="Your Phone Number *" ></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <input type="submit" onClick={async (event) => { event.preventDefault(); await getInfo() }} name="btnSubmit" data-toggle="modal" data-target="#exampleModal" class="btnContact" value="Send Message" ></input>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea name="txtMsg" id="message" class="form-control customTextarea" placeholder="Your Message *" ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;