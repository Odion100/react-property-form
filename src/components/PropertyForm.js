import React, { Component } from "react";
import axios from "axios";
import "../styling/PropertyForm.css";
import PropFormInput from "./PropFormInput";
import secrets from "../secrets";
const { token } = secrets;

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

  async search(e) {
    e.preventDefault();
    //const token = "SqiTETPrrWw2Bxr47Fcxkd1cJhNDUM";
    const { address, city, state, zip } = this.state;
    const baseUrl = `https://api.estated.com/property/v3`;
    const query = `?token=${token}&address=${address}&city=${city}&state=${state}&zipcode=${zip}`;
    const url = baseUrl + query;
    const propertyData = await axios.get(url);
    console.log(this.state);
    console.log(propertyData);
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
