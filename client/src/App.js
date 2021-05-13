import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Events from "./pages/Events";
import Event from "./components/Event"
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/about" component={About} />
        <Route path="/admin" component={Admin} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/events" component={Event} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
