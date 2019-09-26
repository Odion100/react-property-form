import React, { Component } from "react";
import "../styling/PropertyForm.css";
import PropFormInput from "./PropFormInput";

const searchInputs = [
  {
    key: 1,
    pointer: "address",
    caption: "Address"
  },
  {
    key: 2,
    pointer: "city",
    caption: "City"
  },
  {
    key: 3,
    pointer: "state",
    caption: "State"
  },
  {
    key: 4,
    pointer: "zip",
    caption: "Zip Code"
  }
];

export default class PropertyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      city: "",
      state: "",
      zip: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  search(e) {
    e.preventDefault();

    console.log(this.state);
  }

  handleChange(e, prop) {
    const state = {};
    state[prop] = e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className="PropertyForm">
        <form className="property-form" onSubmit={e => this.search(e)}>
          <div>
            {searchInputs.map(input => (
              <PropFormInput
                caption={input.caption}
                key={input.key}
                handler={this.handleChange}
                pointer={input.pointer}
              />
            ))}
          </div>
          <input
            className="property-form__button"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
