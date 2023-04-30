import React from "react";
import { BrowserRouter, Routes, Route, Router, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
    return ( < div > { /*{code here}*/ } <
        Router >
        <
        NavBar / >
        <
        Routes >
        <
        Route path = "/movies"
        component = { Movies }
        /> <
        Route path = "/directors"
        component = { Directors }
        /> <
        Route path = "/actors"
        component = { Actors }
        /> <
        Route path = "/"
        component = { Home }
        /> <
        /Routes> <
        /Router>



        <
        /div>);
    }

    export default App;