import React, { Component } from "react";
import { BmAvatar } from "../lib/components/avatars";
export class Avatars extends Component {
  render() {
    return (
      <div>
        <h3>Avatars</h3>
        <div className="row">
          <div className="column">
            <p>Default</p>
            <div className="column">
              <BmAvatar user="default" size="large" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="default" size="medium" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="default" size="small" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="default" size="xsmall" type="circle" />
            </div>
          </div>
          <div className="column">
            <p>Chatbot</p>
            <div className="column">
              <BmAvatar user="chatbot" size="large" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="chatbot" size="medium" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="chatbot" size="small" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="chatbot" size="xsmall" type="circle" />
            </div>
          </div>
          <div className="column">
            <p>Employee</p>
            <div className="column">
              <BmAvatar user="employee" size="large" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="employee" size="medium" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="employee" size="small" type="circle" />
            </div>
            <div className="column">
              <BmAvatar user="employee" size="xsmall" type="circle" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="column">
              <BmAvatar user="default" size="large" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="default" size="medium" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="default" size="small" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="default" size="xsmall" type="square" />
            </div>
          </div>
          <div className="column">
            <div className="column">
              <BmAvatar user="chatbot" size="large" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="chatbot" size="medium" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="chatbot" size="small" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="chatbot" size="xsmall" type="square" />
            </div>
          </div>
          <div className="column">
            <p>Employee</p>
            <div className="column">
              <BmAvatar user="employee" size="large" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="employee" size="medium" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="employee" size="small" type="square" />
            </div>
            <div className="column">
              <BmAvatar user="employee" size="xsmall" type="square" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatars;
