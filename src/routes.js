import React from "react";
import {Switch, Route} from "react-router-dom";

//import components to use in Route
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
// import Product from "./Components/Product/Product";

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add" component={Form}/>
        <Route path="/edit/:id" component={Form}/>
    </Switch>
)