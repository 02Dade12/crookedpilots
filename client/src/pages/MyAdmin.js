import React from "react";
import "./css/admin.css";

function Admin() {
  return (
    <div class="admin text-center">
      <div class="form-signin">
          <form>
                <h1 class="h3 mb-3 fw-normal ">Admin Portal</h1>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
                <label for="floatingInput">Username</label>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                <label for="floatingPassword">Password</label>
            </div>

              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2020–2021</p>
              
          </form>
        </div>
      </div>    
      )
}

export default Admin;