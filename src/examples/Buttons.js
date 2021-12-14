import React, { Component } from "react";
import { BmButton } from "../lib/components/buttons";
import { Favorite } from "@material-ui/icons";
export class Buttons extends Component {
  render() {
    return (
      <div>
        <h3>Buttons</h3>
        <div className="row">
          <div className="column">
            {/* Primary buttons */}
            <h4>Primary</h4>
            <div className="row">
              <p>Enabled</p>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="large"
                  onClick={() => alert("aaa")}
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  onClick={() => alert("hello")}
                  variant="primary"
                  size="medium"
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="primary" size="small">
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Leading Icons</p>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="large"
                  leadingIcon={<Favorite />}
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="medium"
                  leadingIcon={<Favorite />}
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="small"
                  leadingIcon={<Favorite />}
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Trailing Icons</p>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="large"
                  trailingIcon={<Favorite />}
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="medium"
                  trailingIcon={<Favorite />}
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="small"
                  trailingIcon={<Favorite />}
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Disabled</p>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="large"
                  disabled
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="primary" size="medium" disabled>
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="primary" size="small" disabled>
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <BmButton
                  variant="primary"
                  size="large"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="medium"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="small"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <BmButton
                  variant="primary"
                  size="large"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="medium"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="primary"
                  size="small"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Small
                </BmButton>
              </div>
            </div>
          </div>
          <div className="column">
            {/* Secondary buttons */}
            <h4>Secondary</h4>
            <div className="row">
              <p>Enabled</p>
              <div className="column">
                <BmButton variant="secondary" size="large">
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="secondary" size="medium">
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="secondary" size="small">
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Leading Icons</p>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="large"
                  leadingIcon={<Favorite />}
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="medium"
                  leadingIcon={<Favorite />}
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="small"
                  leadingIcon={<Favorite />}
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Trailing Icons</p>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="large"
                  trailingIcon={<Favorite />}
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="medium"
                  trailingIcon={<Favorite />}
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="small"
                  trailingIcon={<Favorite />}
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Disabled</p>
              <div className="column">
                <BmButton variant="secondary" size="large" disabled>
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="secondary" size="medium" disabled>
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="secondary" size="small" disabled>
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="large"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="medium"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="small"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="large"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="medium"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="secondary"
                  size="small"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Small
                </BmButton>
              </div>
            </div>
          </div>
          <div className="column">
            {/* Tertiary buttons */}
            <h4>Tertiary</h4>
            <div className="row">
              <p>Enabled</p>
              <div className="column">
                <BmButton variant="tertiary" size="large">
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="tertiary" size="medium">
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="tertiary" size="small">
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Leading Icons</p>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="large"
                  leadingIcon={<Favorite />}
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="medium"
                  leadingIcon={<Favorite />}
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="small"
                  leadingIcon={<Favorite />}
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Trailing Icons</p>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="large"
                  trailingIcon={<Favorite />}
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="medium"
                  trailingIcon={<Favorite />}
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="small"
                  trailingIcon={<Favorite />}
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <p>Disabled</p>
              <div className="column">
                <BmButton variant="tertiary" size="large" disabled>
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="tertiary" size="medium" disabled>
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton variant="tertiary" size="small" disabled>
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="large"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="medium"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="small"
                  leadingIcon={<Favorite />}
                  disabled
                >
                  Small
                </BmButton>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="large"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Large
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="medium"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Medium
                </BmButton>
              </div>
              <div className="column">
                <BmButton
                  variant="tertiary"
                  size="small"
                  trailingIcon={<Favorite />}
                  disabled
                >
                  Small
                </BmButton>
              </div>
            </div>
          </div>
        </div>
        <h4>States</h4>
        <div className="row">
          <div className="column">
            <BmButton variant="destructive" size="large">
              Destructive
            </BmButton>
          </div>
          <div className="column">
            <BmButton variant="success" size="large">
              Success
            </BmButton>
          </div>
          <div className="column">
            <BmButton variant="neutral" size="large">
              Neutral
            </BmButton>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <BmButton variant="destructive" size="medium">
              Destructive
            </BmButton>
          </div>
          <div className="column">
            <BmButton variant="success" size="medium">
              Success
            </BmButton>
          </div>
          <div className="column">
            <BmButton variant="neutral" size="medium">
              Neutral
            </BmButton>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <BmButton variant="destructive" size="small">
              Destructive
            </BmButton>
          </div>
          <div className="column">
            <BmButton variant="success" size="small">
              Success
            </BmButton>
          </div>
          <div className="column">
            <BmButton variant="neutral" size="small">
              Neutral
            </BmButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
