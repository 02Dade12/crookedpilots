import React from "react";
import "./css/admin.css";
import AuthApi from "../utils/AuthApi";
import API from "../utils/API";



function Admin() {
  const authApi = React.useContext(AuthApi);


  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = await document.getElementById('floatingInput');
    const pword = await document.getElementById('floatingPassword');
    const userinfo = await {
      email: username.value,
      password: pword.value
    }
    const res = await API.login(userinfo);
    if (res.data.auth) {
      authApi.setAuth(true);
    }
    console.log(res);
    
  }
  return (
    <div class="admin text-center">
      <div class="form-signin">
        <form>
          <h1 class="h3 mb-3 fw-normal ">Admin Portal</h1>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label htmlFor="floatingInput">Username</label>
          </div>

          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSignIn}>Sign in</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2020–2021</p>

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

