import React, { Component } from "react";
import "../styling/PropertyForm.css";
import PropFormInput from "./PropFormInput";

const searchInputs = [
  {
    key: 1,
    value: "",
    caption: "Address"
  },
  {
    key: 2,
    value: "",
    caption: "City"
  },
  {
    key: 3,
    value: "",
    caption: "State"
  },
  {
    key: 4,
    value: "",
    caption: "Zip Code"
  }
];

export default class PropertyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputs
    };
  }

  search(e) {
    e.prventDefalut();
    console.log(this.searchInputs);
  }
  render() {
    const { searchInputs, key } = this.state;
    return (
      <div className="PropertyForm">
        <form className="property-form" onSubmit={e => this.search(e)}>
          <div>
            {searchInputs.map(input => (
              <PropFormInput caption={input.caption} key={input.key} />
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
