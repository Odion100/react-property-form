import React, { Component } from "react";

class PropFormInput extends Component {
  render() {
    return (
      <div className="property-form-input-container">
        <label>
          <span> {this.props.caption}:</span>
          <input
            type="text"
            className="property-form__input"
            defaultValue={this.props.value}
          />
        </label>
      </div>
    );
  }
}

export default PropFormInput;
