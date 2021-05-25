import React from "react";
import "./css/admin.css";


function Admin() {
  return (
    <div className="admin text-center">
      <div className="form-signin">
          <form>
                <h1 className="h3 mb-3 fw-normal ">Admin Portal</h1>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                <label for="floatingInput">Username</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                <label for="floatingPassword">Password</label>
            </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2020–2021</p>
              
          </form>
        </div>
      </div>
  )
}

export default Admin;

/* 
<div class="translucent-form-overlay container">
      <form class="login-form">
        <h3>Admin Sign in</h3>
        <div class="row columns">
          <label>Email
        <input type="email" name="email" placeholder="Enter Email Here" id="email-login"></input>
          </label>
        </div>
        <div class="row columns">
          <label>Password
        <input type="password" name="password" placeholder="Enter Password Here" id="password-login"></input>
          </label>
        </div>

        <button type="submit" class="primary button expanded search-button">
          Sign in
    </button>
      </form>
    </div>  */

      