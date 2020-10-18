import React from "react";

function SearchBox(props) {
  return (
    <div className="input-group input-group-lg">
      <input
          type="text"
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

export default SearchBox;
