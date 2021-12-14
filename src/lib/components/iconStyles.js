import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  BmPrimaryWhite,
  BmPrimaryBlue,
  BmGrey400,
  BmPrimaryBlack,
  BmSecondaryGrey,
} from "./colors";

import SvgIcon from "@material-ui/core/SvgIcon";

const size = (props) => {
  if (props.size === "xsmall") return "1.143rem !important";
  if (props.size === "small") return "1.429rem !important";
  if (props.size === "medium") return "1.714rem !important";
  if (props.size === "large") return "1.714rem !important";
  if (props.size === "xlarge") return "2.286rem !important";
  if (!props.size) return "1.714rem !important";
  return props.size;
};

// Button Icons
const ButtonIcon = {
  root: {
    height: (props) => size(props),
    width: (props) => size(props),
    fill: ({ variant, disabled, color }) => {
      if (color) return color;
      if (!disabled) {
        if (variant === "active") return `${BmPrimaryWhite}`;
        if (variant === "enabled") return `${BmPrimaryBlack}`;
        if (variant === "destructive") return `${BmPrimaryWhite}`;
        if (variant === "success") return `${BmPrimaryWhite}`;
        if (variant === "neutral") return `${BmPrimaryBlue}`;
        if (variant === "primary") return `${BmPrimaryWhite}`;
        if (variant === "secondary") return `${BmPrimaryBlue}`;
        if (variant === "tertiary") return `${BmPrimaryBlue}`;
        return `${BmPrimaryWhite}`;
      } else {
        return `${BmGrey400}`;
      }
    },
  },
};

export const BmButtonIcon = withStyles(ButtonIcon)((props) => {
  if (props.icon) {
    const Icon = props.icon.type;
    return <Icon action {...props} />;
  }
  return null;
});

// Tags
const TagIcon = {
  root: {
    height: (props) => size(props) || "1.143rem !important",
    width: (props) => size(props) || "1.143rem !important",
    fill: ({ variant, color }) => {
      if (color) {
        return color;
      }
      if (variant === "neutral" || variant === "light")
        return `${BmPrimaryBlack}`;
      return `${BmPrimaryWhite}`;
    },
  },
};
export const BmTagIcon = withStyles(TagIcon)((props) => {
  if (props.icon) {
    const Icon = props.icon.type;
    return <Icon action {...props} />;
  }
  return null;
});

// Avatar Icons
const Avatarsize = (props) => {
  if (props.size === "xsmall") return "0.857rem !important";
  if (props.size === "small") return "1.143rem !important";
  if (props.size === "medium") return "1.429rem !important";
  if (props.size === "large") return "2.286rem !important";
  if(!props.size) return "2.286rem !important";
  return props.size;
};


const AvatarIcon = {
  root: {
    fill: (props) => props.color || `${BmPrimaryWhite}`,
    color: (props) => props.color || `${BmPrimaryWhite}`,
    height: (props) => Avatarsize(props),
    width: (props) => Avatarsize(props),
  },
};

export const BmAvatarIcon = withStyles(AvatarIcon)((props) => {
  if (props.icon) {
    const Icon = props.icon.type;
    return <Icon action {...props} />;
  }
  return null;
});

//check on sizing
export const BmChatbotIcon = withStyles(AvatarIcon)((props) => {
  return (
    <SvgIcon action {...props}>
      <path
        d="M19 8.975V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21072 17.5304 4 17 4H11V2.688C11.305 2.414 11.5 2.02 11.5 1.578C11.5 1.18018 11.342 0.798647 11.0607 0.517343C10.7794 0.236038 10.3978 0.0780029 10 0.0780029C9.60218 0.0780029 9.22064 0.236038 8.93934 0.517343C8.65804 0.798647 8.5 1.18018 8.5 1.578C8.5 2.02 8.695 2.414 9 2.688V4H3C2.46957 4 1.96086 4.21072 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V8.998L0.928 9.003C0.675888 9.02097 0.439955 9.13382 0.26775 9.31883C0.095544 9.50384 -0.000132994 9.74725 1.38752e-07 10V12C1.38752e-07 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12V10.062C20.0116 9.90681 19.9869 9.75104 19.928 9.607C19.726 9.119 19.293 9.002 19 8.975ZM5 10C5 8.896 5.672 8 6.5 8C7.328 8 8 8.896 8 10C8 11.104 7.328 12 6.5 12C5.672 12 5 11.104 5 10ZM13.998 16C12.997 15.997 6.001 16 6 16V14C6 14 13.001 13.998 14.002 14L13.998 16ZM13.5 12C12.672 12 12 11.104 12 10C12 8.896 12.672 8 13.5 8C14.328 8 15 8.896 15 10C15 11.104 14.328 12 13.5 12Z"
        fill={props.color || "white"}
      />
    </SvgIcon>
  );
});

// To be refacotored
// Emoji Icons
const EmojiSize = () => {
  // if (props.size === "small") return "1.429rem";
  // if (props.size === "medium") return "1.714rem";
  // if (props.size === "large") return "1.714rem";
  return "2.286rem !important";
};

const EmojiIcon = {
  root: {
    fill: (props) => props.color || `${BmSecondaryGrey}`,
    height: (props) => EmojiSize(props),
    width: (props) => EmojiSize(props),
  },
};

export const BmEmojiIcon = withStyles(EmojiIcon)((props) => {
  if (props.icon) {
    const Icon = props.icon.type;
    return <Icon action {...props} />;
  }
  return null;
});

export const BmQuickReplyIcon = withStyles(EmojiIcon)((props) => {
  return (
    <SvgIcon action {...props}>
      <path
        d="M5.33332 23.3932V5.83317H26.6667V13.8332H29.3333V5.83317C29.3333 4.3665 28.1333 3.1665 26.6667 3.1665H5.33332C3.86666 3.1665 2.67999 4.3665 2.67999 5.83317L2.66666 29.8332L7.99999 24.4998H20V21.8332H6.89332L5.33332 23.3932Z"
        fill={props.color || "#575757"}
      />
    </SvgIcon>
  );
});

const icon = {
  root: {
    fill: (props) => props.color || `${BmSecondaryGrey}`,
    height: (props) => size(props),
    width: (props) => size(props),
    color: (props) => props.color || `${BmSecondaryGrey}`,
  },
};

export const BmIcons = withStyles(icon)((props) => {
  if (props.icon) {
    const Icon = props.icon.type;
    return <Icon action {...props} fill={props.color} />;
  }
  return null;
});

export const BmChatbot = withStyles(icon)((props) => {
  return (
    <SvgIcon action {...props}>
      <path
        d="M19 8.975V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21072 17.5304 4 17 4H11V2.688C11.305 2.414 11.5 2.02 11.5 1.578C11.5 1.18018 11.342 0.798647 11.0607 0.517343C10.7794 0.236038 10.3978 0.0780029 10 0.0780029C9.60218 0.0780029 9.22064 0.236038 8.93934 0.517343C8.65804 0.798647 8.5 1.18018 8.5 1.578C8.5 2.02 8.695 2.414 9 2.688V4H3C2.46957 4 1.96086 4.21072 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V8.998L0.928 9.003C0.675888 9.02097 0.439955 9.13382 0.26775 9.31883C0.095544 9.50384 -0.000132994 9.74725 1.38752e-07 10V12C1.38752e-07 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12V10.062C20.0116 9.90681 19.9869 9.75104 19.928 9.607C19.726 9.119 19.293 9.002 19 8.975ZM5 10C5 8.896 5.672 8 6.5 8C7.328 8 8 8.896 8 10C8 11.104 7.328 12 6.5 12C5.672 12 5 11.104 5 10ZM13.998 16C12.997 15.997 6.001 16 6 16V14C6 14 13.001 13.998 14.002 14L13.998 16ZM13.5 12C12.672 12 12 11.104 12 10C12 8.896 12.672 8 13.5 8C14.328 8 15 8.896 15 10C15 11.104 14.328 12 13.5 12Z"
        fill={props.color || `${BmSecondaryGrey}`}
      />
    </SvgIcon>
  );
});

export const BmSupport = withStyles(icon)((props) => {
  return (
    <SvgIcon action {...props}>
      <path
        d="M21 12.22C21 6.73 16.74 3 12 3C7.31 3 3 6.65 3 12.28C2.4 12.62 2 13.26 2 14V16C2 17.1 2.9 18 4 18H5V11.9C5 8.03 8.13 4.9 12 4.9C15.87 4.9 19 8.03 19 11.9V19H11V21H19C20.1 21 21 20.1 21 19V17.78C21.59 17.47 22 16.86 22 16.14V13.84C22 13.14 21.59 12.53 21 12.22Z"
        fill={props.color || "black"}
      />
      <path
        d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z"
        fill={props.color || "black"}
      />
      <path
        d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z"
        fill={props.color || "black"}
      />
      <path
        d="M18 11.03C17.7615 9.62413 17.0334 8.34796 15.9444 7.42738C14.8555 6.5068 13.4759 6.00117 12.05 6C9.01997 6 5.75997 8.51 6.01997 12.45C7.2531 11.9454 8.34221 11.1435 9.1902 10.1158C10.0382 9.08808 10.6187 7.86652 10.88 6.56C12.19 9.19 14.88 11 18 11.03Z"
        fill={props.color || "black"}
      />
    </SvgIcon>
  );
});

export const CopyToClipBoard = withStyles(icon)((props) => {
  return (
    <SvgIcon action {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </SvgIcon>
  );
});

