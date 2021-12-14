import { Favorite } from "@material-ui/icons";
import React, { Component } from "react";
import { BmTag } from "../lib/components/tags";

export class Tags extends Component {
  render() {
    return (
      <div>
        <h3>Tags</h3>
        <h4>Default</h4>
        <div className="row">
          <div className="column">
            <p>Neutral</p>
            <div className="column">
              <BmTag size="default" variant="neutral">
                Neutral
              </BmTag>
            </div>
            <div className="column">
              <BmTag
                size="default"
                variant="neutral"
                leadingIcon={<Favorite />}
              >
                Neutral
              </BmTag>
            </div>
            <div className="column">
              <BmTag
                size="default"
                variant="neutral"
                trailingIcon={<Favorite />}
              >
                Neutral
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>Success</p>
            <div className="column">
              <BmTag size="default" variant="success">
                success
              </BmTag>
            </div>
            <div className="column">
              <BmTag
                size="default"
                variant="success"
                leadingIcon={<Favorite />}
              >
                success
              </BmTag>
            </div>
            <div className="column">
              <BmTag
                size="default"
                variant="success"
                trailingIcon={<Favorite />}
              >
                success
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>Warning</p>
            <div className="column">
              <BmTag size="default" variant="warning">
                warning
              </BmTag>
            </div>
            <div className="column">
              <BmTag
                size="default"
                variant="warning"
                leadingIcon={<Favorite />}
              >
                warning
              </BmTag>
            </div>
            <div className="column">
              <BmTag
                size="default"
                variant="warning"
                trailingIcon={<Favorite />}
              >
                warning
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>error</p>
            <div className="column">
              <BmTag size="default" variant="error">
                error
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="default" variant="error" leadingIcon={<Favorite />}>
                error
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="default" variant="error" trailingIcon={<Favorite />}>
                error
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>Light</p>
            <div className="column">
              <BmTag size="default" variant="light">
                light
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="default" variant="light" leadingIcon={<Favorite />}>
                light
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="default" variant="light" trailingIcon={<Favorite />}>
                light
              </BmTag>
            </div>
          </div>
        </div>
        {/* Small */}
        <div className="row">
          <h4>Small</h4>
          <div className="column">
            <p>Neutral</p>
            <div className="column">
              <BmTag size="small" variant="neutral">
                Neutral
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="neutral" leadingIcon={<Favorite />}>
                Neutral
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="neutral" trailingIcon={<Favorite />}>
                Neutral
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>Success</p>
            <div className="column">
              <BmTag size="small" variant="success">
                success
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="success" leadingIcon={<Favorite />}>
                success
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="success" trailingIcon={<Favorite />}>
                success
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>Warning</p>
            <div className="column">
              <BmTag size="small" variant="warning">
                warning
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="warning" leadingIcon={<Favorite />}>
                warning
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="warning" trailingIcon={<Favorite />}>
                warning
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>error</p>
            <div className="column">
              <BmTag size="small" variant="error">
                error
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="error" leadingIcon={<Favorite />}>
                error
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="error" trailingIcon={<Favorite />}>
                error
              </BmTag>
            </div>
          </div>
          <div className="column">
            <p>Light</p>
            <div className="column">
              <BmTag size="small" variant="light">
                light
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="light" leadingIcon={<Favorite />}>
                light
              </BmTag>
            </div>
            <div className="column">
              <BmTag size="small" variant="light" trailingIcon={<Favorite />}>
                light
              </BmTag>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
