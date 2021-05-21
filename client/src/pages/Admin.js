import React from "react";

function Admin() {
  return (
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
    </div>

  )
}

export default Admin;