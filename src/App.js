import React from 'react';
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Product from "./Components/Product/Product";
import routes from "./routes";

// import "./reset.css";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      {routes}
      <Form />
      <Product />
    </div>
  );
}