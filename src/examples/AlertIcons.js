import React, { Component } from "react";
import { BmAlertIcon } from "../lib/components/buttonAlertIcons";
import { AssignmentLateOutlined } from "@material-ui/icons";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
export class AlertIcons extends Component {
  render() {
    return (
      <div>
        <h3>Alert Icons</h3>
        <div className="row">
          <div className="column">
            <div className="row">
              <p>Assignment</p>
              <BmAlertIcon icon={<AssignmentLateOutlined />} badgeContent={4} badgeColor="blue" />
            </div>
          </div>
          <div className="column">
            <div className="row">
              <p>Notifications</p>
              <BmAlertIcon icon={<NotificationsNoneIcon />} badgeContent={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertIcons;
