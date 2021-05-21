import React from "react";

import "./css/contactPage.css"

function Contact() {
    return (
            <div class="container contact-form">
                <form>
                    <h1>Reach out to us for bookings and more!</h1>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value=""></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" ></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" ></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" ></input>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea name="txtMsg" class="form-control customTextarea" placeholder="Your Message *" ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default Contact;