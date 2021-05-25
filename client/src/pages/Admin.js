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
    <div className="admin text-center">
      <div className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal ">Admin Portal</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label htmlFor="floatingInput">Username</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSignIn}>Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2020–2021</p>

        </form>
      </div>
    </div>
  )
}

export default Admin;

