import React, { Component } from "react";
import "../styling/PropertyForm.css";

class PropertyForm extends Component {
  render() {
    return (
      <div className="PropertyForm">
        <form className="property-form">
          <div className="property-form-input-container">
            <span> Address:</span>
            <input className="property-form__input" />
          </div>
          <div className="property-form-input-container">
            <span> City:</span>
            <input className="property-form__input" />
          </div>
          <div className="property-form-input-container">
            <span> State:</span>
            <input className="property-form__input" />
          </div>
          <div className="property-form-input-container">
            <span>Zip Code:</span>
            <input className="property-form__input" />
          </div>

          <button className="property-form__button">Search</button>
        </form>
      </div>
    );
  }
}

export default PropertyForm;
