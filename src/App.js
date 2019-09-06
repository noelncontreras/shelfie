import React, { Component } from 'react';
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Product from "./Components/Product/Product";
// import routes from "./routes";

// import "./reset.css";
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios
      .get("api/inventory")
      .then(response => this.setState({inventory: response.data}))
      .catch(error => alert(`You have an ${error}`))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        {/* {routes} */}
        <Form />
        <Product />
      </div>
    );
  }
}
