import React, { Component } from "react";
import { BmSearch } from "../lib/components/search";
export class Search extends Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <div className="row">
          <div className="column">
            <div className="row">
              <p>Without Dropdown</p>
              <BmSearch placeholder="Search for anything" />
            </div>
          </div>
          <div className="column">
            <div className="row">
              <p>With Dropdown</p>
              <BmSearch placeholder="Search for anything" dropdown="yes" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
