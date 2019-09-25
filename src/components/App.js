import React, { Component } from "react";
import "../styling/App.css";
import PropertyForm from "./PropertyForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Property Data Form</h1>
          <PropertyForm />
        </div>
      </div>
    );
  }
}

export default App;
