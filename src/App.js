import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route path="/contact/" exact component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
