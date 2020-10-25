import React from "react";

function PhoneInput(props) {
  return (
    <div className="input-group input-group-lg">
      <div className="input-group-prepend">
        <i class="fas fa-phone"></i>
      </div>
      <input
          type="phone"
          className="form-control rounded-pill-left"
          aria-label="Employee search..."
          aria-describedby="inputGroup-sizing-lg"
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          placeholder="Search..."
          id="search"
          />
      <div className="input-group-append">
        <button className="input-group-text btn-primary rounded-pill-right" id="inputGroup-sizing-lg">Search</button>
      </div>
    </div>
  );
}

export default PhoneInput;
