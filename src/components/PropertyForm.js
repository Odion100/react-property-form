import React, { Component } from "react";
import "../styling/PropertyForm.css";

class PropertyForm extends Component {
  render() {
    return (
      <div className="PropertyForm">
        <form className="property-form">
          <div className="property-form-input-container">
            <label>Address:</label>
            <input className="property-form__input" />
          </div>
          <div className="property-form-input-container">
            <label>City:</label>
            <input className="property-form__input" />
          </div>
          <div className="property-form-input-container">
            <label>State:</label>
            <input className="property-form__input" />
          </div>
          <div className="property-form-input-container">
            <label>Zip Code:</label>
            <input className="property-form__input" />
          </div>

          <button className="property-form__button">Search</button>
        </form>
      </div>
    );
  }
}

export default PropertyForm;
