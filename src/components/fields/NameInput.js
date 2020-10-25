import React from "react";

function NameInput(props) {
  return (
    <div className="input-group input-group-lg">
      <div className="input-group-prepend">
        <i class="fas fa-signature"></i>
      </div>
      <input
          type="text"
          className="form-control rounded-pill-left"
          aria-label="First Name"
          aria-describedby="inputGroup-sizing-lg"
          onChange={props.handleInputChange}
          value={props.search}
          name="FirstName"
          placeholder="Full Name"
          id="search"
          />
      <div className="input-group-append">
        <button className="input-group-text btn-primary rounded-pill-right" id="inputGroup-sizing-lg">Search</button>
      </div>
    </div>
  );
}

export default NameInput;
