import React, { Component } from "react";
import { BmInput } from "../lib/components/input";
export class Input extends Component {
  render() {
    return (
      <div>
        <h3>Inputs</h3>
          <div className="row">
            <div className="column">
              <BmInput
                type="text"
                placeholder="Placeholder"
                id="name"
                label="Enabled State"
                state="enabled"
              /><br/>
              <BmInput
                type="text"
                placeholder="Placeholder"
                value="Text"
                id="name"
                label="Disabled state"
                state="disabled"
              /><br/>
            </div>
            <div className="column">
              <BmInput
                type="text"
                placeholder="Placeholder"
                value="Text"
                id="name"
                label="Completed state"
                state="complete"
              /><br/>
              <BmInput
                type="text"
                placeholder="Placeholder"
                value="Text"
                id="name"
                label="Incomplete State"
                state="incomplete"
              /><br/>
            </div>
            <div className="column">
              <BmInput
                type="text"
                value="Text"
                id="name"
                label="Positive state"
                state="positive"
              /><br/>
              <BmInput
                type="text"
                value="Text"
                id="name"
                label="Negative state"
                state="negative"
              /><br/>
            </div>
            <div className="column">
              <BmInput
                type="text"
                placeholder="Placeholder"
                id="name"
                label="Pressed state"
                state="pressed"
              /><br/>
              <BmInput
                type="text"
                value="Text"
                id="name"
                label="Focused state"
                state="focus"
              /><br/>
            </div>
          </div>
      </div>
    );
  }
}

export default Input;
