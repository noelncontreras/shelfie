import React from 'react';
import Header from "./Components/Header/Header";
import routes from "./routes";

// import "./reset.css";
import './App.css';

export default function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     inventory: []
  //   }
  // }

    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    )
}
