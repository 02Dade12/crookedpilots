import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import Contact from "./pages/Contact"
import Home from "./pages/Home";
import Event from "./components/Event";
import SinglePost from "./components/SinglePost";
import AuthApi from "./utils/AuthApi";


function App() {
  const [auth, setAuth] = useState(false);

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
    <Router>
      <div>
        <Navbar />
        <Routes />
        <Route path="/contact" component={Contact} />
        <Route component={SinglePost} path="/event/:slug"/>
        <Route exact path="/events" component={Event} />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
    </AuthApi.Provider>
  );
}

export default App;
