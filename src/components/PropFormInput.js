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
            onChange={e => {
              this.props.handler(e, this.props.key);
            }}
          />
        </label>
      </div>
    );
  }
}

export default PropFormInput;
