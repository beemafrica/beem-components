import styled from "styled-components";
import Proptypes from "prop-types";
import { BmGrey400 } from "../colors";
import { BmIcons } from "../iconStyles";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export const BmPIWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
  h2 {
    color: ${({ color }) => {
      if (color) return color;
      return `${BmGrey400}`;
    }};
  }
`;

export const BmPerformanceIndicator = ({
  type,
  children,
  size,
  color,
  ...rest
}) => {
  return (
    <BmPIWrapper color={color} {...rest}>
      {type === "upwards" && (
        <BmIcons
          icon={<ArrowCircleUpIcon />}
          size={size || "xlarge"}
          color={color || `${BmGrey400}`}
        />
      )}
      {type === "downwards" && (
        <BmIcons
          icon={<ArrowCircleDownIcon />}
          size={size || "xlarge"}
          color={color || `${BmGrey400}`}
        />
      )}
      <h2>{children}</h2>
    </BmPIWrapper>
  );
};

BmPerformanceIndicator.propTypes = {
  children: Proptypes.string,
  color: Proptypes.string,
  size: Proptypes.string,
  type: Proptypes.string,
};
